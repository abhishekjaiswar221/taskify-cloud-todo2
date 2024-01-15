const express = require("express"); // Import express

const router = express.Router(); // Create a new router using express

router.get("/", (req, res) => {
  res.json([{ myname: "abhishek" }]);
});

module.exports = router; // Export the router
