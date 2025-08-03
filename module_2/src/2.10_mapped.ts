{
    // =========== mapped type
    const arrOfNumbers: number[] = [1, 3, 5 ]
    console.log(arrOfNumbers) // [ 1, 3, 5 ]
    
    // convert this array into a number array 
        const arrayOfString: string[] = [ '1', '3', '5' ] // manual

    const arrOfString: string[] = arrOfNumbers.map((number)=> number.toString())
    console.log(arrOfString); // [ '1', '3', '5' ]

    //another example 
    type AreaNumber = {
        height: number;
        width: number;
    }

    //=========== lookup type
    type Height = AreaNumber["height"] // look up type

    // convert this into a string

    //----------- Manually
    // type AreaString ={
    //     height: string;
    //     width: string
    // }

    // ---------dynamically
     type AreaString ={
        [key in keyof AreaNumber] : string
     }

    // ======== if we want to make it more flexible
    type AreaString2<T> = {
        [key in keyof T] : T[key]
    }

    const area1: AreaString2<{height: string; width: number}> = {
        height: "100",
        width: 50
    }
}
