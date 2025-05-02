// Learning function
// Normal function
// Arrow function
{
function add(num1: number, num2: number = 9): number{
    return num1 + num2;
}
add(2,4)

const addArrow=(num1: number, num2:number): number => num1 + num2;
 
// function in object is called method
const poorUser = {
    name: "Sowda",
    balance: 89,
    addBalance(balance: number): string{
        return`My new balance is : ${this.balance + balance}`;
    },
}


const arr: number[] = [5,7,98];
const newArray: number[] = arr.map((elem: number):number => elem*elem)    

}