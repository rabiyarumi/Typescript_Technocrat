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
}