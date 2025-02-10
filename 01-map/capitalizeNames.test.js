import { describe, it, expect } from "vitest";
import capitalizeMates from "./capitalizeNames";

describe("Given method capitalizeMates", () => {
  it("When an names array is given Then should capitalize all names in array", () => {
    //Arrange
    const NAMES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expectedOutput = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    //Act
    const output = capitalizeMates(NAMES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an empty array is given Then it should been handled", () => {
    //Arrange
    const EMPTY_NAMES_LIST = [];
    const expectedOutput = [];

    //Act
    const output = capitalizeMates(EMPTY_NAMES_LIST);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array that are alredy capitalized is given Then it should been handled", () => {
    //Arrange
    const CAPITALIZED_NAMES = ["John", "Jacob", "Jingleheimer", "Schmidt"];
    const expectedOutput = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    //Act
    const output = capitalizeMates(CAPITALIZED_NAMES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array that are all uppercase is given Then it should been handled", () => {
    //Arrange
    const UPPERCASED_NAMES = ["JOHN", "JACOB", "JINGLEHEIMER", "SCHMIDT"];
    const expectedOutput = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    //Act
    const output = capitalizeMates(UPPERCASED_NAMES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array that are all lowercase is given Then it should been handled", () => {
    //Arrange
    const LOWERCASED_NAMES = ["john", "jacob", "jingleheimer", "schmidt"];
    const expectedOutput = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    //Act
    const output = capitalizeMates(LOWERCASED_NAMES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with mixed casing is given Then it should been handled", () => {
    //Arrange
    const MIXED_CAPITALIZED_NAMES = [
      "jOhN",
      "JaCoB",
      "jInGlEhEiMeR",
      "sChMiDt",
    ];
    const expectedOutput = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    //Act
    const output = capitalizeMates(MIXED_CAPITALIZED_NAMES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });
});
