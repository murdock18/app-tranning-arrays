const {shopCart} = require("./data");

const totalValue = shopCart.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
);

const totalProducts = shopCart.reduce((totalProducts, product)=>{
    return totalProducts + product.quantity;
},0);

console.log(totalProducts);