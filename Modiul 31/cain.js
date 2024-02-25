
let information = {
    name : "rahat",
    Id:23,
    address : {
        cty : "dhaka",
        Division : 'Dhaka',
        country : "Bangladesh",

    }
}

console.log(information.address.country);


const info = {
    Id : 80,
    Name : 'Rahat ',
    Address : {
        city: 'mmirpur',
        Division:"Dhaka",
        country:'Bangladesh'
    }
}
// (?)optional-chain 
console.log(info.address?.country);