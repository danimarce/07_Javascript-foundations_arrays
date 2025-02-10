import { describe, it, expect } from "vitest";
import getTotalVoters from "./getTotalVoters";

describe("Given method getTotalVoters", () => {
  it("When recives a voters array Then it should return the correct number of voters", () => {
    //Arrange
    const VOTERS = [
      { name: "Bob", age: 30, hasVoted: true },
      { name: "Jake", age: 32, hasVoted: true },
      { name: "Kate", age: 25, hasVoted: false },
      { name: "Sam", age: 20, hasVoted: false },
      { name: "Phil", age: 21, hasVoted: true },
      { name: "Ed", age: 55, hasVoted: true },
      { name: "Tami", age: 54, hasVoted: true },
      { name: "Mary", age: 31, hasVoted: false },
      { name: "Becky", age: 43, hasVoted: false },
      { name: "Joey", age: 41, hasVoted: true },
      { name: "Jeff", age: 30, hasVoted: true },
      { name: "Zack", age: 19, hasVoted: false },
    ];
    const expectedOutput = 7;

    //Act
    const output = getTotalVoters(VOTERS);

    //Assert
    expect(output).toBe(expectedOutput);
  });

  it("When recives a no voters array Then it should return 0", () => {
    //Arrange
    const NO_VOTERS = [
      { name: "Kate", age: 25, hasVoted: false },
      { name: "Sam", age: 20, hasVoted: false },
      { name: "Mary", age: 31, hasVoted: false },
      { name: "Becky", age: 43, hasVoted: false },
      { name: "Zack", age: 19, hasVoted: false },
    ];
    const expectedOutput = 0;

    //Act
    const output = getTotalVoters(NO_VOTERS);

    //Assert
    expect(output).toBe(expectedOutput);
  });

  it("When recives an all voters array Then it should return the correct number", () => {
    //Arrange
    const ALL_VOTERS = [
      { name: "Bob", age: 30, hasVoted: true },
      { name: "Jake", age: 32, hasVoted: true },
      { name: "Phil", age: 21, hasVoted: true },
      { name: "Ed", age: 55, hasVoted: true },
      { name: "Tami", age: 54, hasVoted: true },
      { name: "Joey", age: 41, hasVoted: true },
      { name: "Jeff", age: 30, hasVoted: true },
    ];
    const expectedOutput = 7;

    //Act
    const output = getTotalVoters(ALL_VOTERS);

    //Assert
    expect(output).toBe(expectedOutput);
  });

  it("When recives an empty array Then it should return 0", () => {
    //Arrange
    const EMPTY_VOTERS = [];
    const expectedOutput = 0;

    //Act
    const output = getTotalVoters(EMPTY_VOTERS);

    //Assert
    expect(output).toBe(expectedOutput);
  });

  it("When recives an array with one voter who has voted Then it should return 1", () => {
    //Arrange
    const SINGLE_VOTER = [{ name: "Kate", age: 25, hasVoted: true }];
    const expectedOutput = 1;

    //Act
    const output = getTotalVoters(SINGLE_VOTER);

    //Assert
    expect(output).toBe(expectedOutput);
  });

  it("When recives an array with one no voter who has voted Then it should return 0", () => {
    //Arrange
    const SINGLE_NON_VOTER = [{ name: "Kate", age: 25, hasVoted: false }];
    const expectedOutput = 0;

    //Act
    const output = getTotalVoters(SINGLE_NON_VOTER);

    //Assert
    expect(output).toBe(expectedOutput);
  });
});
