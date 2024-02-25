// unpacking object and array value 

let actor = {
    name:'rahta',
    phn:0980980555,
    money:80978879980,
    address : 'mirpur'
}

let keys = Object.keys(actor); // use key find object proparty
console.log(keys);

let value = Object.values(actor); // use values key find value
console.log(value);

// destructuer object element 
let {name, phn:phone, money, address}= actor;
console.log(phone,name,money,address);

//delete value form object 
delete actor.address;
console.log(actor);