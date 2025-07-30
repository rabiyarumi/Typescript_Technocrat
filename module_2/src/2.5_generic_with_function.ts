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



    // function with generics and tuple
    const arrayWithGenericTuple = <T, Q>(param1: T, param2: Q) : [T, Q] =>{
        return [param1, param2]
    }
    const res3 = arrayWithGenericTuple<string, number>("Bangladesh", 444)
    const res4 = arrayWithGenericTuple<string, {name: string}>("Bangladesh", {name: "Asia"})

    const resObj3 = arrayWithGeneric<{id: number; name: string}>({id: 334, name: "Mr. X"})


    
    //function with generics
    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"

        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "Mr. X", email: "x@gmail.com", devType: "Backend Developer"})

    const student2 = addCourseToStudent({name: "Mr. Y", email: "y@gmail.com", experience: "2 Years"})



}