
// normal function
// function add(num1 , num2){
//     return num1 + num2;
// }

// console.log(add(4, 8));

// arrow function


let add = (a, b) => a + b;
console.log(add(8, 10));

//single peramiter use/no parentheses
let multi = num1 => num1 * 2;
console.log(multi(4));

//multi line arrow function in use return keyword

let multilLine = (num1, num2, num3) => {
let add = num1 + num2 + num3;
let mul = num1 * num2 * num3;

let total = add + mul;
return total ;
}

console.log(multilLine(8, 4, 3));