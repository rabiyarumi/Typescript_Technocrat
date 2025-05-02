// Basic Data type
// typescript has 2 types of data type
// 1- Primitive  2- non-primitive

//------ primitive datatype ---------\\

// implicit data type
let name = "Sidra"


// explicid data type 

// string
let firstName: string = "Sawda"

//number
let number: number = 1234;

// boolean
let isStudent: boolean = true;

//undefined
let x : undefined = undefined;

//null
let y: null = null;

//any : it should not used
let a;
a = 123;
a= "ahs";
a= true;

let b: number;
b = 123;
// b= "ahs"; //======= error: Type 'string' is not assignable to type 'number'
// b= true; //======= error: Type 'boolean' is not assignable to type 'number'

//----------- non-primitive -------\\

// ----- array 

let friends: string[] = ["uumi", "surmi"]
friends.push("Rumi")
// friends.push(123) // error

let rollNumber: number[] =[ 3, 5, 7]
rollNumber.push(8)
// rollNumber.push("ghg") // error

//------------ tuple --> its a types of array --> maintain order --> means which type os value how many value
let coordinates: [number, number] = [1,4]

let ageName : [ number, string, boolean] = [50, "mr.X" , true];
ageName[0]=22;


