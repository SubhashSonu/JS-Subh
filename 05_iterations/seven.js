let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNumbers.map( (num) => num + 10);  // map does not modified array rather it return another array with modified value


// Method of chaining
const newNums = myNumbers
    .map((num) => num * 10)  // Multiply each number by 10
    .map((num) => num + 1)   // Add 1 to each number
    .filter((num) => num >= 40); // Keep only numbers >= 40

console.log(newNums);
