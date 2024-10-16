API Endpoints

1. Generate a Random Word
   Endpoint: GET /api/words/
   Description: Returns a random word from the dictionary.

2. Generate a Random Word by Length
   Endpoint: GET /api/words/length/:length
   Description: Returns a random word of a specific length.

3. Generate a Random Word Starting with a Character
   Endpoint: GET /api/words/char/:char
   Description: Returns a random word that starts with the specified character.

4. Generate a Random Word with Specific Length and Starting Character
   Endpoint: GET /api/words/char/:char/length/:length
   Description: Returns a random word that starts with a specific character and matches the specified length.

5. Generate a Random Word Not Containing Specific Characters
   Endpoint: GET /api/words/not-contains/:chars
   Description: Returns a random word that does not contain the specified characters.

6. Generate a Random Word by Starting Characters
   Endpoint: GET /api/words/starts-with/:chars
   Description: Returns a random word that starts with a specific set of characters.

7. Generate a Random Word by Substring
   Endpoint: GET /api/words/contains/:substring
   Description: Returns a random word that contains the specified substring.

8. Generate a Random Word by Length Range
   Endpoint: GET /api/words/length-range/:min/:max
   Description: Returns a random word that falls within a specified length range.

# Contributing

Contributions are welcome! If you have suggestions for improvements or want to report a bug, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
