import { describe, it, expect } from "vitest";
import extractVipsNames from "./extractVipsNames";

describe("Given methodextractVipsNames", () => {
  it("When recives a VIPS array Then should extract names from the array", () => {
    //Arrange
    const VIPS = [
      { name: "Foo", age: 80 },
      { name: "Bar", age: 2 },
      { name: "Fizz", age: 5 },
      { name: "Buzz", age: 16 },
      { name: "FizzBuzz", age: 100 },
    ];
    const expectedOutput = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    //Act
    const output = extractVipsNames(VIPS);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When recives an empty array Then should been handled", () => {
    //Arrange
    const EMPTY_VIPS_LIST = [];
    const expectedOutput = [];

    //Act
    const output = extractVipsNames(EMPTY_VIPS_LIST);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When recives array with a single VIP Then should extract his name", () => {
    //Arrange
    const SINGLE_VIP_LIST = [{ name: "Foo", age: 80 }];
    const expectedOutput = ["Foo"];

    //Act
    const output = extractVipsNames(SINGLE_VIP_LIST);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When recives array with VIPS with diferent ages Then should extract their names", () => {
    //Arrange
    const VIPS_WITH_DIFFERENT_AGES = [
      { name: "Foo", age: 80 },
      { name: "Bar", age: 2 },
      { name: "Fizz", age: 5 },
      { name: "Buzz", age: 16 },
      { name: "FizzBuzz", age: 100 },
    ];
    const expectedOutput = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    //Act
    const output = extractVipsNames(VIPS_WITH_DIFFERENT_AGES);

    //Assert
    expect(output).toEqual(expectedOutput);
  });
});
