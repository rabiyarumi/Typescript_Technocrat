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
  // console.log({isAdult})

  //========== nullish coalescing operator ----> Decision making based on null or undefined ---> it will only work if the value is null or undefined

  const isAuthenticated = null; //{ result1: Guest  }
  // const isAuthenticated = undefined; //{ result1: Guest  }
  // const isAuthenticated = ""; //{ result1: '' }
  // const isAuthenticated = true; //{ result1: true }
  // const isAuthenticated = false; //{ result1: false }
  const result1 = isAuthenticated ?? "Guest"
  console.log({result1})
}