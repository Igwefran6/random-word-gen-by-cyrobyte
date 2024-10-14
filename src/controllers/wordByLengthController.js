const wordsData = require("../data/words_dictionary.json"); // Import the JSON file
const badWords = require("../data/badWords"); // Import the array of bad words
const words = wordsData.words; // Access the words from the dictionary

// Function to generate a random word based on the length provided in the request
const generateWordByLength = (req, res) => {
  const length = parseInt(req.params.length, 10);
  // Get the length from the URL parameter
  if (isNaN(length) || length < 4 || length > 20) {
    return res
      .status(400)
      .json({ error: "Please provide a valid length between 4 and 20." });
  }

  // Filter words based on the specified length
  const filteredWords = words.filter((word) => word.length === length);

  // If no words of the specified length are found, return an error
  if (filteredWords.length === 0) {
    return res
      .status(404)
      .json({ error: `No words found with length ${length}.` });
  }

  let randomWord;
  let attempts = 0; // To avoid an infinite loop in case all words are bad

  // Find a valid word that is not in the badWords list
  do {
    const randomIndex = Math.floor(Math.random() * filteredWords.length); // Get a random word from filtered list
    randomWord = filteredWords[randomIndex]; // Get a random word from the array
    attempts++;
  } while (badWords.includes(randomWord) && attempts < 10); // Ensure the word is not a bad word

  // If no valid word is found after 10 attempts, return an error
  if (badWords.includes(randomWord)) {
    return res
      .status(404)
      .json({ error: "No valid word found after multiple attempts." });
  }

  // Send the valid random word in the response
  res.status(200).json({ word: randomWord });
};

module.exports = {
  generateWordByLength,
};
