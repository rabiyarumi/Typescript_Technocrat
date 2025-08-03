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

}