import { describe, it, expect } from "vitest";
import customersWhoBelongToMembership from "./customersWhoBelongToMembership";

describe("Given method customersWhoBelongToMembership", () => {
  it("When an array with customers is passed Then it should return the same array", () => {
    //Arrange
    const CUSTOMERS_LIST = [
      { name: "Foo", isMember: true },
      { name: "Bar", isMember: false },
      { name: "Fizz", isMember: true },
      { name: "Buzz", isMember: false },
      { name: "FizzBuzz", isMember: true },
    ];
    const expectedOutput = [
      { name: "Foo", isMember: true },
      { name: "Fizz", isMember: true },
      { name: "FizzBuzz", isMember: true },
    ];

    //Act
    const output = customersWhoBelongToMembership(CUSTOMERS_LIST);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an empty array is passed Then it should return an empty array", () => {
    //Arrange
    const EMPTY_CUSTOMERS_LIST = [];
    const expectedOutput = [];
    //Act
    const output = customersWhoBelongToMembership(EMPTY_CUSTOMERS_LIST);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with no members is passed Then it should return an empty array", () => {
    //Arrange
    const CUSTOMERS_LIST_WITH_NO_MEMBERS = [
      { name: "Bar", isMember: false },
      { name: "Buzz", isMember: false },
    ];
    const expectedOutput = [];

    //Act
    const output = customersWhoBelongToMembership(
      CUSTOMERS_LIST_WITH_NO_MEMBERS,
    );

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an array with all members is passed Then it should return the same array", () => {
    //Arrange
    const CUSTOMERS_LIST_WITH_ALL_MEMBERS = [
      { name: "Foo", isMember: true },
      { name: "Fizz", isMember: true },
      { name: "FizzBuzz", isMember: true },
    ];
    const expectedOutput = [
      { name: "Foo", isMember: true },
      { name: "Fizz", isMember: true },
      { name: "FizzBuzz", isMember: true },
    ];

    //Act
    const output = customersWhoBelongToMembership(
      CUSTOMERS_LIST_WITH_ALL_MEMBERS,
    );

    //Assert
    expect(output).toEqual(expectedOutput);
  });
});
