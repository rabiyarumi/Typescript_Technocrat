// Basic Data type
// typescript has 2 types of data type
// 1- Primitive  2- non-primitive

//------ primitive datatype ---------\\

// implicit data type
let name = "Sidra"


// explicid data type 

// string == 1
let firstName: string = "Sawda"

//number == 2
let number: number = 1234;

// boolean == 3
let isStudent: boolean = true;

//undefined == 4
let x : undefined = undefined;

//null == 5
let y: null = null;

//any : it should not used == 6
let a;
a = 123;
a= "ahs";
a= true;

let b: number;
b = 123;
// b= "ahs"; //======= error: Type 'string' is not assignable to type 'number'
// b= true; //======= error: Type 'boolean' is not assignable to type 'number'

//----------- non-primitive -------\\

// ----- array  == 7

let friends: string[] = ["uumi", "surmi"]
friends.push("Rumi")
// friends.push(123) // error

let rollNumber: number[] =[ 3, 5, 7]
rollNumber.push(8)
// rollNumber.push("ghg") // error

//------------ tuple == 8
//  --> its a types of array --> maintain order --> means which type os value how many value
let coordinates: [number, number] = [1,4]

let ageName : [ number, string, boolean] = [50, "mr.X" , true];
ageName[0]=22;


