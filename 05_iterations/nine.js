const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval ;
// }, 0);

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 );

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Cpp course",
        price: 3999
    },
    {
        itemName: "Css course",
        price: 1999
    },
    {
        itemName: "Ai ML course",
        price: 4999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item)=> acc+item.price, 0);

console.log(priceToPay);