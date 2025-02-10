import { describe, it, expect } from "vitest";
import extendUserSettings from "./extendUsersSettings";

describe("Given method extendUsersSettings", () => {
  // it.todo("should add id and isEnabled properties to each user");
  it("When an array object is passed Then should add id and isEnabled properties to each user", () => {
    //Arrange
    const USERS = [
      {
        email: "lindsay.ferguson@reqres.in",
        firstName: "Lindsay",
        lastName: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        email: "michael.lawson@reqres.in",
        firstName: "Michael",
        lastName: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        email: "tobias.funke@reqres.in",
        firstName: "Tobias",
        lastName: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ];
    const expectedOutput = [
      {
        email: "lindsay.ferguson@reqres.in",
        firstName: "Lindsay",
        lastName: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        id: 0,
        isEnabled: true,
      },
      {
        email: "michael.lawson@reqres.in",
        firstName: "Michael",
        lastName: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        id: 1,
        isEnabled: true,
      },
      {
        email: "tobias.funke@reqres.in",
        firstName: "Tobias",
        lastName: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        id: 2,
        isEnabled: true,
      },
    ];

    //Act
    const output = extendUserSettings(USERS);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("When an empty array is passed Then should be handled", () => {
    //Arrange
    const USERS = [];
    const expectedOutput = [];

    //Act
    const output = extendUserSettings(USERS);

    //Assert
    expect(output).toEqual(expectedOutput);
  });
});
