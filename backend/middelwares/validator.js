const { body, validationResult } = require("express-validator");
const productsRules = [
  body("name", "name is required").notEmpty(),
  body("description", "description is required").notEmpty(),
  body("prix", "prix is required").notEmpty(),
];
const registerRules = [
  body("firstname", "firstname is required").notEmpty(),
  body("lastname", "lastname is required").notEmpty(),
  body("email", "enter a valid email").isEmail(),
  body("password", "password at least 6 caracters").isLength({ min: 6 }),
];
const loginRules = [
  body("email", "enter a valid email").isEmail(),
  body("password", "password at least 6 caracters").isLength({ min: 6 }),
];
const validator = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).send({ errors: error.array() });
  }
  next();
};

module.exports = { validator, productsRules, registerRules, loginRules };
