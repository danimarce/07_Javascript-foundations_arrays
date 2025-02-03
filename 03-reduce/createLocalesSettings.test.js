import { describe, it, expect } from "vitest";
import createLocalsSettings from "./createLocalesSettings";

describe("Given method createLocalesSettings", () => {
  it("When locales array is passed Then should create locales settings with the first locale enabled and the rest disabled", () => {
    //Arrange
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
    const expectedOutput = {
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };

    //Act
    const output = createLocalsSettings(LOCALES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an empty array is passed Then should return an empty object", () => {
    //Arrange
    const EMPTY_LOCALES = [];
    const expectedOutput = {};

    //Act
    const output = createLocalsSettings(EMPTY_LOCALES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with one locale is passed Then it should be handled", () => {
    //Arrange
    const SINGLE_LOCALE = ["EN"];
    const expectedOutput = {
      EN: { id: 0, enabled: true },
    };

    //Act
    const output = createLocalsSettings(SINGLE_LOCALE);

    //Assert
    expect(output).toEqual(expectedOutput);
  });
});
