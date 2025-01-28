// const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
// const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 */

/**
 * Returns an array of strings with length equal or greater than 5.
 *
 * @param {string[]} wordsList - The array of words to filter.
 * @returns {string[]} An array containing words with length equal or greater than 5.
 */
export default function wordsList(wordsList) {
  const newWordsList = [];
  const wordsListLength = wordsList.length;
  const limit = 5;

  for (let wordIndex = 0; wordIndex < wordsListLength; wordIndex++) {
    const word = wordsList[wordIndex];

    if (word.length >= limit) {
      newWordsList.push(word);
    }
  }

  return newWordsList;
}
