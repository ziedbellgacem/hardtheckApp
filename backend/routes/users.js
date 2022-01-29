const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const isAuth = require("../middelwares/isAuth");
const upload = require("../middelwares/upload");
const {
  registerRules,
  validator,
  loginRules,
} = require("../middelwares/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// /test
router.get("/test", (req, res) => {
  res.send("test users ok ");
});

//method Post
//url /
// req.body

// url api/auth/signup
// method post
// req.body

router.post("/signup", [registerRules, validator], async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    //check user exist
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.status(400).send({ errors: [{ msg: "email is already exist " }] });
    }

    const user = new User({
      firstname,
      lastname,
      email,
      password,
    });

    // hash password
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);
    user.password = hashPassword;
    await user.save();

    // token
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.mySecret, { expiresIn: "7d" });
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});

// url /api/auth/signin
//method post
// req.body

router.post("/signin", [loginRules, validator], async (req, res) => {
  const { email, password } = req.body;
  try {
    //check user exist

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ errors: [{ msg: "user not found " }] });
    }
    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: "user not found " }] });
    }

    //token
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.mySecret, {
      expiresIn: "7d",
    });
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});

// // url /api/auth/allusers
//method get

router.get("/allusers", isAuth, async (req, res) => {
  try {
    const users = await User.find();
    res.send({ users });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});

// url api/auth/current
//method get
//req.headers
router.get("/current", isAuth, async (req, res) => {
  console.log(req.user);
  try {
    const user = await User.findById(req.user.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});

// url api/auth/updateuser
// methode put
// req.params

router.put(
  "/updateuser",
  [isAuth, upload.single("myPhoto")],
  async (req, res) => {
    const userId = req.user.id;
    let pictureUrl = "";
    if (req.file) {
      pictureUrl = req.file.filename;
    }
    try {
      const user = await User.findByIdAndUpdate(userId, {
        $set: { ...req.body },
        pictureUrl,
      });
      res.send("user  update");
    } catch (error) {
      res.send("server err");
    }
  }
);

// url /api/auth/deleteuser
// methode delete
// req.params

router.delete("/deleteuser/:userId", isAuth, async (req, res) => {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.send("user deleted");
  } catch (error) {
    res.status(500).send("server err");
  }
});

module.exports = router;
