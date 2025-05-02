"use strict";
// Reference Type -->  Object
const user = {
    firstName: "Akshita",
    lastName: "Atrin",
    isStudent: true,
    collageName: "Haraganga"
};
user.lastName = "Ayrin";
// user.firstName= "Azmia" //------- error: Cannot assign to 'firstName' because it is a read-only property.
// user.collageName= "Collage" //---- error: '"Collage"' is not assignable to type '"Haraganga"'.
