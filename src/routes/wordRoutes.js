// src/routes/wordRoutes.js
const express = require("express");
const { generateWord } = require("../controllers/wordController.js");
const {
  generateWordByLength,
} = require("../controllers/wordByLengthController.js");
const {
  generateWordByFirstChar,
} = require("../controllers/wordByFirstCharController.js");

const router = express.Router();

// GET random word
router.get("/", generateWord);
router.get("/length/:length", generateWordByLength);
router.get("/char/:char", generateWordByFirstChar);

module.exports = router;
