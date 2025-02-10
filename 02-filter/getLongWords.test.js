//Implement saem test defined in 00-imperative/getLongWords.test.js
import { describe, it, expect } from "vitest";
import getLongWords from "./getLongWords";

describe("Given method getLongWords", () => {
  // it.todo("should return long words from LANGUAGES array");
  it("When LANGUAGES array is passed Then only words with length equal or greater then 5 should be returned", () => {
    //Arrange
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const longWordsCollection = ["JavaScript", "TypeScript"];

    //Act
    const output = getLongWords(LANGUAGES);

    //Assert
    expect(output).toEqual(longWordsCollection);
  });

  it("When BEATLES array is passed Then only words with length equal or greater then 5 should be returned", () => {
    //Arrange
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const longWordsCollection = ["George", "Ringo"];

    //Act
    const output = getLongWords(BEATLES);

    //Assert
    expect(output).toEqual(longWordsCollection);
  });

  it("When WORDS array are not long enough Then should return an empty array", () => {
    //Arrange
    const SHORT_WORDS = ["a", "bb", "ccc", "dddd"];
    const expectedResult = [];

    //Act
    const output = getLongWords(SHORT_WORDS);

    //Assert
    expect(output).toEqual(expectedResult);
  });

  it("When WORDS array are long enough Then should return the same array", () => {
    //Arrange
    const ALL_LONG_WORDS = ["JavaScript", "TypeScript", "Python"];
    const expectedResult = ["JavaScript", "TypeScript", "Python"];

    //Act
    const output = getLongWords(ALL_LONG_WORDS);

    //Assert
    expect(output).toEqual(expectedResult);
  });

  it("When an empty array is passed Then should return an empty array", () => {
    //Arrange
    const EMPTY_ARRAY = [];
    const expectedResult = [];

    //Act
    const output = getLongWords(EMPTY_ARRAY);

    //Assert
    expect(output).toEqual(expectedResult);
  });

  it("When an array with mixed length words is passed Then should handle it", () => {
    //Arrange
    const MIXED_LENGTH_WORDS = ["short", "tiny", "adequate", "sufficient"];
    const expectedResult = ["short", "adequate", "sufficient"];

    //Act
    const output = getLongWords(MIXED_LENGTH_WORDS);

    //Assert
    expect(output).toEqual(expectedResult);
  });
});
