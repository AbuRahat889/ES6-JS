//filter selectes elements base condition and return an array with the elements that fullfil the condition 

const array = [ 32,3,2,7,9,4642,6343,453, 324, 524, 64, 234];

let doubleArray = array.filter(n => n %2===1);
console.log(doubleArray);