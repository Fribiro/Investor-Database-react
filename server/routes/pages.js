const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("signup");
});

router.get("/investor", (req, res) => {
  res.render("investor");
});

router.get('/entrepreneur', (req, res) => {
  res.render('entrepreneur');
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});


module.exports = router;
