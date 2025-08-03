{

    //============== Promise

    //Simulate
    const createPromise =() : Promise<string> => {
        return new Promise<string> ((resolve, reject) => {
            const data : string = "Something"

            if(data){
                resolve(data)
            }else{
                reject("Failed to load data")
            }
        })
    }

    // calling create promise function
    const showData = async () : Promise<string> => {
        const data : string = await createPromise();
        console.log(data);
        return data
    }

    showData();


}