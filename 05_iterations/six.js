// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//    return num > 5
// }); // filters return value depending upon the condition



// const newNums = [];

// myNums.forEach( (num) => {
//     if(num > 4)
//         newNums.push(num);
// })

// console.log(newNums); 


const books = [
    { title: "The Silent Patient", genre: "Thriller", publish: 2019, edition: "1st (2019)" },
    { title: "Atomic Habits", genre: "Self-Help", publish: 2018, edition: "1st (2018)" },
    { title: "Dune", genre: "Science Fiction", publish: 1965, edition: "3rd (1984)" },
    { title: "To Kill a Mockingbird", genre: "Classic", publish: 1960, edition: "2nd (1995)" },
    { title: "1984", genre: "Dystopian", publish: 1949, edition: "5th (2003)" },
    { title: "The Great Gatsby", genre: "Classic", publish: 1925, edition: "4th (1974)" },
    { title: "Sapiens", genre: "History", publish: 2011, edition: "1st (2011)" },
    { title: "Harry Potter and the Sorcerer’s Stone", genre: "Fantasy", publish: 1997, edition: "1st (1997)" },
    { title: "The Alchemist", genre: "Philosophical Fiction", publish: 1988, edition: "2nd (1993)" },
    { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: "3rd (1951)" }
  ];
  

  const newNums = [];

  const userBooks = books.filter( (bk) =>{
      return (bk.genre === 'History');
  }
  )
//   console.log(userBooks);
  const userBooks1 = books.filter((bk) =>{
    return (bk.publish > 2000  && bk.genre === "History");
  })

  console.log(userBooks1);