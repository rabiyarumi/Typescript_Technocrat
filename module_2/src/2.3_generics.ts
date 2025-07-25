{
    // ============= Generic type

    const rollNumbers1: number[] = [4, 7, 9,3,4]  // type alias
    const rollNumbers2: Array<number> = [4, 7, 9,3,4]  // type Generics


    // If we want to make it reusable 
    type GenericBoolean = Array<boolean>
    const isAdmin2 : GenericBoolean = [true, false, true] // type Generics

    // if we want to make it dynamically reusable
    type GenericArray<T> = Array<T>
    const mentors2: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"] // type Generics

    //================= array of object using generic type
    const user: GenericArray<{ name: string, age: number}> = [
        {
            name: "Mezbah",
            age: 100,
        },
        {
            name: "Halim",
            age: 200
        }
    ]
    

    //========= generic tuple

    type GenericTuple<X, Y> = [X, Y]

    const manush: GenericTuple<string, string> = ["Mr X", "Mrs X"]

    const userWithID : GenericTuple<number, {name: string, email: string}> = [123, {name: "urmi", email: "urmi@gmail.com"}]

}

