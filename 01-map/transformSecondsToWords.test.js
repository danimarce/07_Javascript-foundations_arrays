import { describe, it, expect } from "vitest";
import transformSecondsToWords from "./transformSecondsToWords";

describe("Given method transformSecondsToWords", () => {
  it("When array of numbers is recived Then should return an array of strings", () => {
    //Arrange
    const SECONDS = [2, 5, 100];
    const expectedResult = ["2", "5", "100"];

    //Act
    const output = transformSecondsToWords(SECONDS);

    //Assert
    expect(output).toEqual(expectedResult);
  });

  it("When an empty array is recived Then should return an empty array", () => {
    //Arrange
    const EMPTY_SECONDS_LIST = [];
    const expectedResult = [];

    //Act
    const output = transformSecondsToWords(EMPTY_SECONDS_LIST);

    //Assert
    expect(output).toEqual(expectedResult);
  });

  it("When an array with one element is recived Then should return an array with one string", () => {
    //Arrange
    const SINGLE_SECOND_LIST = [42];
    const expectedResult = ["42"];

    //Act
    const output = transformSecondsToWords(SINGLE_SECOND_LIST);

    //Assert
    expect(output).toEqual(expectedResult);
  });

  it("When an array with zero is recived Then should return an array with string 0", () => {
    //Arrange
    const SINGLE_SECONDS_LIST_WITH_VALUE_ZERO = [0];
    const expectedResult = ["0"];

    //Act
    const output = transformSecondsToWords(SINGLE_SECONDS_LIST_WITH_VALUE_ZERO);

    //Assert
    expect(output).toEqual(expectedResult);
  });

  it("When an array with negative numbers is recived Then should return an array with strings", () => {
    //Arrange
    const SECONDS_LIST_WITH_NEGATIVE_VALUES = [-1, -60, -3600];
    const expectedResult = ["-1", "-60", "-3600"];

    //Act
    const output = transformSecondsToWords(SECONDS_LIST_WITH_NEGATIVE_VALUES);

    //Assert
    expect(output).toEqual(expectedResult);
  });
});
