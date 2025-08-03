{
    // ============ conditional type

    type a1 =  string;
    type b1 = undefined;

    type x = a1 extends null ? true : false; // conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // nested conditional type

    //----------------
    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string
    }

    

    // check if he has car/ bike/ ship/ tractor
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false; // keyof sheikh = "bike" | "car" | "ship"

    type HasBike = CheckVehicle<"bike"> // true
    type HasTractor = CheckVehicle <"tractor"> // false

}