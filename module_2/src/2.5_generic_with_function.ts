{
    //=============== Function with generics

    //normal function
    const createArray = (param: string) : string[] =>{
        return [param]
    }
    const res1 = createArray("Bangla")

    
    // function with generics
    const arrayWithGeneric = <T>(param: T) : T[] =>{
        return [param]
    }
    const res2 = arrayWithGeneric<boolean>(true)
    const resObj = arrayWithGeneric<{id: number; name: string}>({id: 334, name: "Mr. X"})



}