{
    // ================= generic constraints with keyof operator

    // if we want to make a union type 

    type Owner = "bike" | "car" | "ship" // manually


    type Vehicle ={
        bike: string;
        car: string;
        ship: string
    }

    type Owner2 = keyof Vehicle; // in short

    //----------
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: "Mr. persian",
        age: 34,
        address: "ctg"
    }

    const result =getPropertyValue(user, "age")


}