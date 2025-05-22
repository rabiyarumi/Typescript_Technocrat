{
//=========== Interface || type alias vs type interface ===========\\

// type alias
type User1 ={
    name: string;
    age: number;
}

const user1: User1={
    name: "Rumi",
    age: 21,
}


// type interface
interface User2 {
    name: string;
    age: number;
}

const user2 : User2={
    name: "Rumi",
    age: 22
}

//---------- type alias can be used for primitive and non-primitive both type -------- but type interface can only be used for non-primitive type 
type RollNumber = number;
//


//------ if we want to add a new property we can use "intersection " for "type alias" and we can use "extend" keyword for " type intersection" 

//----- type alias
type UserWithRole1 = User1 & {role: string}
const userWithRole1: UserWithRole1={
    name: "Rumi",
    age: 21,
    role: "Admin"
}

//---- type interface
interface UserWithRole2 extends User2 {
    role: string
}

const userWithRole2: UserWithRole2={
    name: "Rumi",
    age: 21,
    role: "User"
}


//=============== type interface for array
type Roll1 = number[];

interface Roll2 {
    [index: number]: number;
}

const rollNumber1: Roll1 = [ 4, 6, 8,7];
const rollNumber2: Roll2 = [ 4, 6, 8,7];


}