const express = require("express"); // Import express module
const router = express.Router(); // Create a new router using express
const User = require("../models/Users"); // Import the User model
const { body, validationResult } = require("express-validator"); // Import express-validator module and destructure body and validationResult from it to  validate the data entered by the user

// Route 1: Create a User using: POST "/api/auth/createuser". Doesn't require Auth
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 4 }),
    body("username", "Enter a valid username").isLowercase({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ Error: "Sorry a user with this email already exists" });
      }

      //Create a new user
      user = await User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user); // Return the created user
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router; // Export the router
