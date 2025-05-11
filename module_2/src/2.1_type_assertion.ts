{
//

//=============== type assertion
let anything : any;
anything = "Hello World";
anything = 123;

(anything as number) // this is type assertion

const kgToGm = (value: string | number): string | number | undefined => {
    if(typeof value === "string"){
        const convertedValue = parseFloat(value)* 1000;
        return `The Converted value is: ${convertedValue}`
    }
    if(typeof value === "number"){
        return value * 1000;
    }
}

const result1 = kgToGm(300) as number;
const result2 = kgToGm(300) as string;

//=========== 
type CustomError ={
    message: string
}
try{

}catch(error){
    console.log((error as CustomError).message)
}

//
}