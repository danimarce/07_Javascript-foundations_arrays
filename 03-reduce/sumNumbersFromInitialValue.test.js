//Implement saem test defined in 00-imperative/sumNumbersFromInitialValue.test.js
import { describe, it, expect } from "vitest";
import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue";

const EMPTY_NUMBERS_LIST = [];
const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];
const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];
const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

const initialAccumulatedValueAsZero = 0;
const initialAccumulatedValueAsTen = 10;
const initialAccumulatedValueAsOneHundred = 100;

describe("Given method sumNumbersFromInitialValue", () => {
  it("When the initial value is 0 Then the correct sum should be returned", () => {
    //Arrange
    const expectedResult = 15;

    //Act
    const sumOutput = sumNumbersFromInitialValue(
      POSITIVE_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    //Assert
    expect(sumOutput).toBe(expectedResult);
  });

  it("When the initial value is 10 Then the correct sum should be returned", () => {
    //Arrange
    const expectedResult = 25;

    //Act
    const sumOutput = sumNumbersFromInitialValue(
      POSITIVE_NUMBERS_LIST,
      initialAccumulatedValueAsTen,
    );

    //Assert
    expect(sumOutput).toBe(expectedResult);
  });

  it("When the list is empty Then the initial value should be returned", () => {
    //Arrange
    const expectedResult = initialAccumulatedValueAsTen;

    //Act
    const sumOutput = sumNumbersFromInitialValue(
      EMPTY_NUMBERS_LIST,
      initialAccumulatedValueAsTen,
    );

    //Assert
    expect(sumOutput).toBe(expectedResult);
  });

  it("When the list have negative number Then the correct sum should be returned", () => {
    //Arrange
    const expectedResult = -15;

    //Act
    const sumOutput = sumNumbersFromInitialValue(
      NEGATIVE_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    //Assert
    expect(sumOutput).toBe(expectedResult);
  });

  it("When the list have positive and negative numbers Then the correct sum should be returned", () => {
    //Arrange
    const expectedResult = 3;

    //Act
    const sumOutput = sumNumbersFromInitialValue(
      MIXED_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    //Assert
    expect(sumOutput).toBe(expectedResult);
  });

  it("When the initial value is 0 Then should be handled", () => {
    //Arrange
    const expectedResult = 15;

    //Act
    const sumOutput = sumNumbersFromInitialValue(
      POSITIVE_NUMBERS_LIST,
      initialAccumulatedValueAsZero,
    );

    //Assert
    expect(sumOutput).toBe(expectedResult);
  });

  it("When the initial value is 100 Then should be handled", () => {
    //Arrange
    const expectedResult = 115;

    //Act
    const sumOutput = sumNumbersFromInitialValue(
      POSITIVE_NUMBERS_LIST,
      initialAccumulatedValueAsOneHundred,
    );

    //Assert
    expect(sumOutput).toBe(expectedResult);
  });
});
