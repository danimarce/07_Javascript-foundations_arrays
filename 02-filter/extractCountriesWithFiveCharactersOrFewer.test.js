import { describe, it, expect } from "vitest";
import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer";

describe("Given method extractCountriesWithFiveCharactersOrFewer", () => {
  it("When an array with countries is recived Then should return coutries with five characters or fewer", () => {
    //Arrange
    const COUNTRIES_WITH_MIXED_LENGTH = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const expectedOutput = ["Italy"];

    //Act
    const output = extractCountriesWithFiveCharactersOrFewer(
      COUNTRIES_WITH_MIXED_LENGTH,
    );

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an empty array is recived Then should return an empty array", () => {
    //Arrange
    const EMPTY_COUNTRIES_ARRAY = [];
    const expectedOutput = [];

    //Act
    const output = extractCountriesWithFiveCharactersOrFewer(
      EMPTY_COUNTRIES_ARRAY,
    );

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with no countries having five characters or fewer is recived Then should return an empty array", () => {
    //Arrange
    const COUNTRIES_WITH_NO_SHORT_NAMES = [
      "United Kingdom",
      "Portugal",
      "Greece",
    ];
    const expectedOutput = [];

    //Act
    const output = extractCountriesWithFiveCharactersOrFewer(
      COUNTRIES_WITH_NO_SHORT_NAMES,
    );

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with no countries having five characters or fewer is recived Then should return the same array", () => {
    //Arrange
    const COUNTRIES_WITH_ALL_SHORT_NAMES = ["Italy", "Spain", "Japan"];

    const expectedOutput = ["Italy", "Spain", "Japan"];

    //Act
    const output = extractCountriesWithFiveCharactersOrFewer(
      COUNTRIES_WITH_ALL_SHORT_NAMES,
    );

    //Assert
    expect(output).toEqual(expectedOutput);
  });
});
