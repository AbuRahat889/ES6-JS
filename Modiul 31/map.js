
const array = [ 32, 324, 53, 524, 64, 234,243];

// // callback function

// function sum(n){
//     return n * 2;
// }

// const add = sum => sum *2;
// const summation =array.map(add);
// console.log(summation);

const doubleArray = array.map(double => double * 2)
console.log(doubleArray);