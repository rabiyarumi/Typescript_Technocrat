{
    // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 12;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  //========= Ternary operator
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({isAdult})

}