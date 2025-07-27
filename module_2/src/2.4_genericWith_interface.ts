{
    // Interface with Generic

    interface Developer<T , Y = null> {
        name: string;
        laptop: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike? : Y;
    }

    type EmilabWatch ={
        brand: string;
        model: string;
        display: string;
    }
    const poorDeveloper : Developer<EmilabWatch> = {
        name: "Rumi",
        laptop: {
            brand: "Asus",
            model: "X-255K",
            releaseYear:2014,
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "OLED",
        }
    }

    //------------------

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper : Developer<AppleWatch, YamahaBike> = {
        name: "Juhi",
        laptop: {
            brand: "HP",
            model: "X-255R",
            releaseYear:2019,
        },
        smartWatch: {
            brand: "Apple",
            model: "sud",
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "Yamaha",
            engineCapacity: "100cc"
        }
    }


    
    //
}