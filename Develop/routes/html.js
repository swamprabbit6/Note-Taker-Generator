const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", (req, res) => {
  res.send("Home page");
});

// notes page route.
router.get("/notes.html", (req, res) => {
  res.send("Notes page");
});

module.exports = router;