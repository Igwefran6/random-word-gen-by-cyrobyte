// src/controllers/wordController.js

const wordsData = require("../data/words_dictionary.json"); // Import the JSON file
const badWords = require("../data/badWords"); // Import the array of bad words
const words = wordsData.words; // Access the words array

const generateWord = (req, res) => {
  let randomWord;
  let attempts = 0; // To avoid an infinite loop in case all words are bad

  do {
    const randomIndex = Math.floor(Math.random() * words.length); // Use the words array length
    randomWord = words[randomIndex]; // Get a random word from the array
    attempts++;
  } while (badWords.includes(randomWord) && attempts < 10); // Check if the word is a bad word

  // If no valid word is found after 10 attempts, return an error
  if (badWords.includes(randomWord)) {
    return res.status(404).json({ error: "No valid word found" });
  }

  res.status(200).json({ word: randomWord }); // Send the valid random word in the response
};

module.exports = {
  generateWord,
};
