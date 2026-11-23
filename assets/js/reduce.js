const cl = console.log;
//  REDUCE – 30  Tasks

// Array 1 (Numbers)
const numbers1 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Sum of all numbers
const sum = numbers1.reduce((acc, curr) => {
  return acc + curr;
}, 0);
cl(sum)

// 2. Product of all numbers
const product = numbers1.reduce((acc, curr) => {
  return acc * curr;
}, 1);

cl(product);
// 3. Find the maximum number
const max = numbers1.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, 1);
cl(max)

// 4. Find the minimum number
const min = numbers1.reduce((acc, curr) => {
  return curr < acc ? curr : acc;
})
cl(min)

// 5. Count how many numbers are even
const even = numbers1.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + 1;
  }
  return acc;
}, 0);
cl(even);

// 6. Count how many numbers are odd
const odd = numbers1.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    return acc + 1;
  }
  return acc;
}, 0)
cl(odd)

// 7. Find average of numbers
const average = numbers1.reduce((acc, curr) => {
  return acc + curr;
}) / numbers1.length;
cl(average)

// 8. Find difference between sum of even and odd numbers
const result = numbers1.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.even += curr;
  } else {
    acc.odd += curr;
  }
  return acc;
}, {
  even: 0,
  odd: 0
})
cl(result)
cl(result.even - result.odd)

// 9. Create object { greaterThan50, lessOrEqual50 }
const result1 = numbers1.reduce((acc, curr) => {
  if (curr > 50) {
    acc.greaterThan50.push(curr);
  } else {
    acc.lessOrEqual50.push(curr);
  }
  return acc;
}, {
  greaterThan50: [],
  lessOrEqual50: []
});
cl(result1)

// 10. Convert array into object { index: value }
const result3 = numbers1.reduce((acc, curr, index) => {
  acc[index] = curr;
  return acc;
}, {});
cl(result3)

//------------------------------------------------------//

// Array 2 (Products)
const products1 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Calculate total cart value
const total = products1.reduce((acc, curr) => {
  return acc + (curr.price * curr.qty);
}, 0)
cl(total)

// 12. Find product with highest price
const highest = products1.reduce((acc, curr) => {
  return curr.price > acc.price ? curr : acc;
});
cl(highest);

// 13. Find product with lowest qty
const lowestQty = products1.reduce((acc, curr) => {
  return curr.qty < acc.qty ? curr : acc;
})
cl(lowestQty)

// 14. Group products into { expensive, cheap }
const grouped = products1.reduce((acc, curr) => {
  if (curr.price > 500) {
    acc.expensive.push(curr);
  } else {
    acc.cheap.push(curr);
  }
  return acc;
}, {
  expensive: [],
  cheap: []
})
cl(grouped)

// 15. Create object { productName: totalValue }
const obj = products1.reduce((acc, curr) => {
  acc[curr.name] = curr.price * curr.qty;
  return acc;
}, {});
cl(obj)

// Array 3 (Students)
const students1 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Calculate total marks of each student
const marks = students1.reduce((acc, curr) => {
  const total = curr.marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0);

  acc.push({
    name: curr.name,
    totalMarks: total
  });
  return acc;
}, [])
cl(marks)

// 17. Find student with highest total marks
const highest1 = students1.reduce((acc, curr) => {

  const total = curr.marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0);

  const previousTotal = acc.marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0);

  return total > previousTotal ? curr : acc;
})
cl(highest1)

// 18. Find student with lowest average marks
const highest2 = students1.reduce((acc, curr) => {

  const total = curr.marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0) / curr.marks.length;

  const previousTotal = acc.marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0) / acc.marks.length;

  return total < previousTotal ? curr : acc;
})
cl(highest2)

// 19. Create object { studentName: averageMarks }
const obj1 = students1.reduce((acc, curr) => {
  const total = curr.marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0);
  acc[curr.name] = total / curr.marks.length;

  return acc;
}, {})
cl(obj1);

// 20. Count students scored > 250 total
const count = students1.reduce((acc, curr) => {
  const total = curr.marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0);

  if (total > 250) {
    return acc + 1;
  }
  return acc;
}, 0);

cl(count);

// Array 4 (Words)
const words1 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Count frequency of each word
const count1 = words1.reduce((acc, cv) => {
  acc[cv] = (acc[cv] || 0) + 1;

  return acc;
}, {});
cl(count1)
// 22. Find word with maximum occurrence

// 23. Remove duplicates (unique words array)
let duplicate = words1.reduce((acc, cv) => {
  if (!acc.includes(cv)) {
    acc.push(cv)
  }
  return acc;
}, []);
cl(duplicate)
// 24. Create string of all words joined with "-"
// 25. Find total characters in all words

// Array 5 (Transactions)
const transactions1 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Find net balance (credits - debits)
const find1 = transactions1.reduce((acc, cv) => {
  return cv.type === "credit"
    ? acc + cv.amount
    : acc - cv.amount;
}, 0)
cl(find1)

// 27. Separate total debit and credit in one object
const separate = transactions1.reduce((acc, cv) => {
  acc[cv.type] += cv.amount
  return acc;
}, { credit: 0, debit: 0 });
cl(separate)
// 28. Find transaction with max amount
const transaction = transactions1.reduce((acc, cv) => {
  return cv.amount > acc.ammount ? cv : acc;
})
cl(transaction)
// 29. Create object { credit: [ids], debit: [ids] }
const obj2 = transactions1.reduce((acc, cv) => {
  acc[cv.type].push(cv.id);

  return acc;
}, { credit: [], debit: [] })
cl(obj2)
// 30. Count transactions with amount > 400
const trans = transactions1.reduce((acc, cv) => {
  return cv.amount > 400 ? acc + 1 : acc
})

cl(obj2)

// 🔥 FIND – 30 Medium + Advanced Tasks

// Array 1 (Numbers)
const numbers2 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Find first number > 50
const find2 = numbers2.find((cv) => {
  return cv > 50;
})
cl(find2)

// 2. Find first even number
const find3 = numbers2.find((acc, cv) => {
  return cv % 2 === 0;
})
cl(find3)
// 3. Find first odd number
const find4 = numbers2.find((cv) => {
  return cv % 2 === 1;
})
cl(find4)

// 4. Find first number divisible by 5
const find5 = numbers2.find((acc, cv) => {
  return cv % 5 === 0;
})
cl(find5)
// 5. Find first number which is prime
const find6 = numbers2.find((acc, cv) => {
  return cv % 2 === 1;
})
cl(find6)
// 6. Find first number < 10
const find7 = numbers2.find((acc, cv) => {
  return cv < 10
})
cl(find7)
// 7. Find first number which is multiple of 11
const find8 = numbers2.find((acc, cv) => {
  return cv % 11 === 0;
})
cl(find8)
// 8. Find first number whose square > 100
const find9 = numbers2.find((acc, cv) => {
  return cv * cv > 10
})
cl(find9)
// 9. Find first number between 20 and 50
const find10 = numbers2.find((cv) => {
  return cv > 20 && cv < 50;
})
cl(find10)
// 10. Find first number not divisible by 2 or 3
const find11 = numbers2.find((cv) => {
  return cv % 2 !== 0 && cv % 3 !== 0
})
cl(find11)

// Array 2 (Products)
const products2 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

//11. Find first product with price > 700
const find19 = products2.find((cv) => {
  return cv.price > 700;
});
cl(find19);


//12. Find first product with qty > 5
const find12 = products2.find((cv) => {
  return cv.qty > 5;
});
cl(find12);


//13. Find first product with name starting with "P"
const find13 = products2.find((cv) => {
  return cv.name.startsWith("P");
});
cl(find13);


//14. Find first product with total value (price * qty) > 1000
const find14 = products2.find((cv) => {
  return cv.price * cv.qty > 1000;
});
cl(find14);


//15. Find first product with name length > 6
const find15 = products2.find((cv) => {
  return cv.name.length > 6;
});
cl(find15);




// Array 3 (Students)
const students2 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Find first student with total marks > 250
// 17. Find first student with average marks < 70
// 18. Find first student whose name starts with "N"
// 19. Find first student who has scored 90 or more in any subject
// 20. Find first student whose total marks are even

// Array 4 (Words)
const words2 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Find first word with length > 5
// 22. Find first word starting with "b"
// 23. Find first duplicate word
// 24. Find first word containing letter "n"
// 25. Find first word ending with "e"

// Array 5 (Transactions)
const transactions2 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Find first credit transaction > 400
const find26 = transactions2.find((cv) => {
  return cv.type === "credit" && cv.amount > 400;
});
cl(find26);


// 27. Find first debit transaction < 300
const find27 = transactions2.find((cv) => {
  return cv.type === "debit" && cv.amount < 300;
});
cl(find27);


// 28. Find first transaction with id > 3
const find28 = transactions2.find((cv) => {
  return cv.id > 3;
});
cl(find28);


// 29. Find first transaction of type "debit"
const find29 = transactions2.find((cv) => {
  return cv.type === "debit";
});
cl(find29);


// 30. Find first transaction with amount exactly 200
const find30 = transactions2.find((cv) => {
  return cv.amount === 200;
});
cl(find30);



// FINDINDEX – 30 Tasks

// Array 1 (Numbers)
const numbers3 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Find index of first number > 50
// 2. Find index of first even number
// 3. Find index of first odd number
// 4. Find index of first number divisible by 5
// 5. Find index of first number which is prime
// 6. Find index of first number < 10
// 7. Find index of first number multiple of 11
// 8. Find index of first number whose square > 100
// 9. Find index of first number between 20 and 50
// 10. Find index of first number not divisible by 2 or 3

// Array 2 (Products)
const products3 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Find index of first product with price > 700
// 12. Find index of first product with qty > 5
// 13. Find index of first product with name starting with "P"
// 14. Find index of first product with total value (price*qty) > 1000
// 15. Find index of first product with name length > 6

// Array 3 (Students)
const students3 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Find index of first student with total marks > 250
// 17. Find index of first student with average marks < 70
// 18. Find index of first student whose name starts with "N"
// 19. Find index of first student who scored 90 or more in any subject
// 20. Find index of first student whose total marks are even

// Array 4 (Words)
const words3 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Find index of first word with length > 5
// 22. Find index of first word starting with "b"
// 23. Find index of first duplicate word
// 24. Find index of first word containing letter "n"
// 25. Find index of first word ending with "e"

// Array 5 (Transactions)
const transactions3 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Find index of first credit transaction > 400
// 27. Find index of first debit transaction < 300
// 28. Find index of first transaction with id > 3
// 29. Find index of first transaction of type "debit"
// 30. Find index of first transaction with amount exactly 200


// SOME  Tasks

// Array 1 (Numbers)
const numbers4 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Check if there is any number > 100
// 2. Check if there is any even number
// 3. Check if there is any odd number
// 4. Check if there is any number divisible by 7
// 5. Check if there is any prime number
// 6. Check if there is any number < 10
// 7. Check if there is any number multiple of 11
// 8. Check if there is any number whose square > 150
// 9. Check if there is any number between 20 and 50
// 10. Check if there is any number not divisible by 2 or 3

// Array 2 (Products)
const products4 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Check if there is any product with price > 700
// 12. Check if there is any product with qty > 5
// 13. Check if there is any product with name starting with "P"
// 14. Check if there is any product with total value (price*qty) > 1000
// 15. Check if there is any product with name length > 6

// Array 3 (Students)
const students4 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Check if any student has total marks > 250
// 17. Check if any student has average marks < 70
// 18. Check if any student name starts with "N"
// 19. Check if any student scored 90 or more in any subject
// 20. Check if any student has total marks even

// Array 4 (Words)
const words4 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Check if there is any word with length > 5
// 22. Check if there is any word starting with "b"
// 23. Check if there is any duplicate word
// 24. Check if there is any word containing letter "n"
// 25. Check if there is any word ending with "e"

// Array 5 (Transactions)
const transactions4 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Check if there is any credit transaction > 400
// 27. Check if there is any debit transaction < 300
// 28. Check if there is any transaction with id > 3
// 29. Check if there is any transaction of type "debit"
// 30. Check if there is any transaction with amount exactly 200


//EVERY – 30 Tasks

// Array 1 (Numbers)
const numbers5 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Check if every number > 0
// 2. Check if every number is even
// 3. Check if every number is odd
// 4. Check if every number < 150
// 5. Check if every number divisible by 5
// 6. Check if every number < 200
// 7. Check if every number is prime
// 8. Check if every number > 10
// 9. Check if every number < 100
// 10. Check if every number not divisible by 3

// Array 2 (Products)
const products5 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Check if every product price > 100
// 12. Check if every product qty > 0
// 13. Check if every product name length > 3
// 14. Check if every product total value (price*qty) > 100
// 15. Check if every product price < 1500

// Array 3 (Students)
const students5 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Check if every student total marks > 200
// 17. Check if every student average marks > 60
// 18. Check if every student name length > 3
// 19. Check if every student scored < 100 in all subjects
// 20. Check if every student total marks even

// Array 4 (Words)
const words5 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Check if every word length > 3
// 22. Check if every word contains letter "a"
// 23. Check if every word starts with a lowercase letter
// 24. Check if every word ends with a vowel
// 25. Check if every word is unique (true/false)

// Array 5 (Transactions)
const transactions5 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Check if every transaction amount > 0
// 27. Check if every credit transaction amount > 100
// 28. Check if every debit transaction amount < 500
// 29. Check if every transaction type is string
// 30. Check if every transaction id < 10


// FILL – 30 Tasks

// Array 1 (Numbers)
const numbers6 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Fill all elements with 0
// 2. Fill first 3 elements with 100
// 3. Fill last 2 elements with -1
// 4. Fill elements from index 2 to 5 with 50
// 5. Fill elements from index 0 to 4 with 9
// 6. Fill elements greater than 50 with 500
// 7. Fill even index elements with 0
// 8. Fill odd index elements with -1
// 9. Fill middle 3 elements with 999
// 10. Fill all numbers divisible by 5 with 555

// Array 2 (Products)
const products6 = ["Laptop", "Phone", "Tablet", "Headphones"];

// 11. Fill all product names with "Unknown"
// 12. Fill first 2 products with "Gadget"
// 13. Fill last product with "Accessory"
// 14. Fill products from index 1 to 3 with "Device"
// 15. Fill product names starting with "P" with "PhoneItem"

// Array 3 (Students)
const students6 = ["Aman", "Ravi", "Neha", "Simran"];

// 16. Fill all student names with "Anonymous"
const find16 = [...students6].fill("Anonymous");
cl(find16);


// 17. Fill first student name with "Student1"
const find17 = [...students6].fill("Student1", 0, 1);
cl(find17);


// 18. Fill last student name with "Student4"
const find18 = [...students6].fill("Student4", 3, 4);
cl(find18);


// 19. Fill middle 2 student names with "TempName"
const find191 = [...students6].fill("TempName", 1, 3);
cl(find191);


// 20. Fill student names starting with "N" with "NStudent"
const find20 = students6.map((cv) => {
  return cv.startsWith("N") ? "NStudent" : cv;
});
cl(find20);

// Array 4 (Boolean Array)
const flags6 = [true, false, true, false, true];

// 21. Fill all elements with false
const find21 = [...flags6].fill(false);
cl(find21);


// 22. Fill first 2 elements with true
const find22 = [...flags6].fill(true, 0, 2);
cl(find22);


// 23. Fill last 2 elements with true
const find23 = [...flags6].fill(true, 3, 5);
cl(find23);


// 24. Fill middle element with false
const find24 = [...flags6].fill(false, 2, 3);
cl(find24);


// 25. Fill elements at even index with false
const find25 = flags6.map((cv, index) => {
  return index % 2 === 0 ? false : cv;
});
cl(find25);

// Array 5 (Mixed Array)
const mixed6 = [1, "a", true, 5, "b", false, 10];

// 26. Fill all numbers with 0
const fill = mixed6.map((cv) => {
  return typeof cv === "number" ? 0 : cv;
});
cl(fill);


// 27. Fill all strings with "x"
const fill1 = mixed6.map((cv) => {
  return typeof cv === "string" ? "x" : cv;
});
cl(fill1);


// 28. Fill all booleans with true
const fill2 = mixed6.map((cv) => {
  return typeof cv === "boolean" ? true : cv;
});
cl(fill2);


// 29. Fill first 3 elements with null
const fill3 = [...mixed6].fill(null, 0, 3);
cl(fill3);


// 30. Fill last 3 elements with undefined
const fill4 = [...mixed6].fill(undefined, 4, 7);
cl(fill4);
