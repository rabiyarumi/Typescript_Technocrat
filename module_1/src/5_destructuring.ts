{

    //======= Destructuring in object
    const user ={
        id: 345,
        name: {
            firstName: "Rabeya",
            middleName: "Rumi",
            lastName: "Shikder"
        },
        contactNo: "0178888888888",
        address: "Uganda"
    }
    const {address, name: {middleName: midName}} = user;

    //============= Array destructuring
    const myFriend = ["Tanjila", "Tamanna", "Sadia", "Afroj", "Abira", "Afi", ]
    const [,, bestFriend, ...rest]= myFriend;


}