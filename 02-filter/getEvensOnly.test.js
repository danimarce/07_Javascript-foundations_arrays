import { describe, it, expect } from "vitest";
import getEvensOnly from "./getEvensOnly";

describe("Given method getEvensOnly", () => {
  it("When an numbers array is passed Then it should return only even numbers", () => {
    //Arrange
    const NUMBERS = [2, 25, 43, 12, 67, 42, 28];
    const expectedOutput = [2, 12, 42, 28];

    //Act
    const output = getEvensOnly(NUMBERS);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an empty array is passed Then it should return an empty array", () => {
    //Arrange
    const EMPTY_NUMBERS_LIST = [];
    const expectedOutput = [];

    //Act
    const output = getEvensOnly(EMPTY_NUMBERS_LIST);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with no even numbers is passed Then it should return an empty array", () => {
    //Arrange
    const NUMBERS_LIST_WITHOUT_EVEN_VALUES = [1, 3, 5, 7, 9];
    const expectedOutput = [];

    //Act
    const output = getEvensOnly(NUMBERS_LIST_WITHOUT_EVEN_VALUES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with all even numbers is passed Then it should return the same array", () => {
    //Arrange
    const NUMBERS_LIST_WITH_ALL_EVEN_VALUES = [2, 4, 6, 8, 10];
    const expectedOutput = [2, 4, 6, 8, 10];

    //Act
    const output = getEvensOnly(NUMBERS_LIST_WITH_ALL_EVEN_VALUES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with negative numbers is passed Then it should be handled", () => {
    //Arrange
    const NUMBERS_LIST_WITH_NEGATIVE_VALUES = [-2, -4, -6, -8, -10];
    const expectedOutput = [-2, -4, -6, -8, -10];

    //Act
    const output = getEvensOnly(NUMBERS_LIST_WITH_NEGATIVE_VALUES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with mixed positive and negative numbers is passed Then it should be handled", () => {
    //Arrange
    const NUMBERS_LIST_WITH_MIXED_VALUES = [-1, 4, -6, 8, -10];
    const expectedOutput = [4, -6, 8, -10];

    //Act
    const output = getEvensOnly(NUMBERS_LIST_WITH_MIXED_VALUES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });
});
