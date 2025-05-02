"use strict";
// Learning function
// Normal function
// Arrow function
function add(num1, num2 = 9) {
    return num1 + num2;
}
add(2, 4);
const addArrow = (num1, num2) => num1 + num2;
// function in object is called method
const poorUser = {
    name: "Sowda",
    balance: 89,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    },
};
const arr = [5, 7, 98];
const newArray = arr.map((elem) => elem * elem);
