const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const isAuth = require("../middelwares/isAuth");

//method Post
//url /comment
// req.body
// add comment
router.post("/:productId", isAuth, async (req, res) => {
  const { text } = req.body;
  const { productId } = req.params;
  const user = req.user.id;
  try {
    const comment = new Comment({
      text,
      product: productId,
      user,
    });
    await comment.save();
    res.send("comment is add");
  } catch (error) {
    res.status(500).send("server err");
  }
});

// method get
// url /allcomments

router.get("/:productId/allcomments", isAuth, async (req, res) => {
  const { productId } = req.params;
  try {
    const comments = await Comment.find({ product: productId }).populate(
      "user",
      ["firstname", "lastname", "pictureUrl"]
    );
    res.send({ comments });
  } catch (error) {
    res.status(500).send("server err");
  }
});

// method update
//  url / updatecomment
// req.body
//  req.params

router.put("/:productId/updatecomment/:commentId", isAuth, async (req, res) => {
  const { commentId } = req.params;
  try {
    await Comment.findByIdAndUpdate(commentId, { $set: { ...req.body } });
    res.send("comment update");
  } catch (error) {
    res.status(500).send("server err");
  }
});

// method delete
// url /deletecomment
// req.params

router.delete(
  "/:productId/deletecomment/:commentId",
  isAuth,
  async (req, res) => {
    const { commentId } = req.params;
    const { productId } = req.params;
    try {
      await Comment.findByIdAndDelete(commentId);
      res.send("comment deleted");
    } catch (error) {
      res.status(500).send("server err");
    }
  }
);

// get one comment

module.exports = router;
