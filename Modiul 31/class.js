
class Product{
    country = 'Bangladesh';
    constructor(name, price){
        this.name = name;
        this.productPrice = price;
    }

}
Product.country('dhaka')

const sizeOfProduct = new Product('pen', '12');
console.log(sizeOfProduct);