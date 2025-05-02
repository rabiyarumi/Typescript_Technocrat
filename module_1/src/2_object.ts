// Reference Type -->  Object

const user: {
    readonly firstName: string; 
    middleName?: string; // Optional
    lastName: string;
    isStudent: boolean;
    collageName: "Haraganga" // Literal types

}  ={
    firstName: "Akshita",
    lastName: "Atrin",
    isStudent: true,
    collageName: "Haraganga"

}

user.lastName= "Ayrin"
// user.firstName= "Azmia" //------- error: Cannot assign to 'firstName' because it is a read-only property.
// user.collageName= "Collage" //---- error: '"Collage"' is not assignable to type '"Haraganga"'.