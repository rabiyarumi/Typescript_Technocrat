{
    //============== Utility type

    //---------- Pick & Omit
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }
    // pick ==> it will make a new union type with the given property
    type NameAge = Pick<Person, "name" | "age">

    // omit ==> it will make a new union will all the property exept the given property
    type ContactInfo = Omit<Person, "name" | "age">



    // ----------- Required & Partial
    
    // Required ==> it will make every property required included optionals
    type PersonRequired = Required<Person>

    // Partial ==> it will make every property optional 
    type PersonPartial = Partial<Person>

    // ReadOnly ==> it can never be change
    type PersonReadOnly = Readonly<Person>

    const person1 : PersonReadOnly ={
        name: "Mr X",
        age: 22,
        email: "x@gmail.com",
        contactNo: "0173"
    }

    // Record ==> it will dynamically accept the key and value both
    type MyObj = Record<string, string>

    const obj1: MyObj={
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    }

    // if we don't know the type of the value 
    const EmptyObj : Record<string, unknown> = {}


}