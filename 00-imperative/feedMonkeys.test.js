import { describe, it, expect } from "vitest";
import feedMonkeys from "./feedMonkeys";

const MONKEYS_LIST = ["🐒", "🦍", "🦧"];

describe("Given method feedMonkeys", () => {
  it("When fruit is a banana Then should feed monkeys with bananas", () => {
    //Arrange
    const banana = "🍌";
    const feedMonkeysColletion = [
      `🐒 ${banana}`,
      `🦍 ${banana}`,
      `🦧 ${banana}`,
    ];

    //Act
    const feedMonkeysColletionOutput = feedMonkeys(MONKEYS_LIST, banana);

    //Assert
    expect(feedMonkeysColletionOutput).toEqual(feedMonkeysColletion);
  });

  it("When fruit is a apple Then should feed monkeys with apples", () => {
    //Arrange
    const apple = "🍎";
    const feedMonkeysColletion = [`🐒 ${apple}`, `🦍 ${apple}`, `🦧 ${apple}`];

    //Act
    const feedMonkeysColletionOutput = feedMonkeys(MONKEYS_LIST, apple);

    //Assert
    expect(feedMonkeysColletionOutput).toEqual(feedMonkeysColletion);
  });

  it("When fruit is a grape Then should feed monkeys with grapes", () => {
    //Arrange
    const grape = "🍇";
    const feedMonkeysColletion = [`🐒 ${grape}`, `🦍 ${grape}`, `🦧 ${grape}`];

    //Act
    const feedMonkeysColletionOutput = feedMonkeys(MONKEYS_LIST, grape);

    //Assert
    expect(feedMonkeysColletionOutput).toEqual(feedMonkeysColletion);
  });

  it("When not a fruit is provided Then should return an empty array", () => {
    //Arrange
    const expectedResult = [];

    //Act
    const output = feedMonkeys(MONKEYS_LIST, "test");

    //Assert
    expect(output).toEqual(expectedResult);
  });

  it("When we feed the monkeys with special characters Then should be handled", () => {
    //Arrange
    const specialCharacters = "🍉🍇";
    const feedMonkeysColletion = [
      `🐒 ${specialCharacters}`,
      `🦍 ${specialCharacters}`,
      `🦧 ${specialCharacters}`,
    ];

    //Act
    const feedMonkeysColletionOutput = feedMonkeys(
      MONKEYS_LIST,
      specialCharacters,
    );

    //Assert
    expect(feedMonkeysColletionOutput).toEqual(feedMonkeysColletion);
  });
});
