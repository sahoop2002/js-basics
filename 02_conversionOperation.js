let score = 33 
console.log (typeof score)
console.log (typeof (score))


let score1 = "33 "
console.log (typeof score1)
console.log (typeof (score1))
let valueInNumber1 = Number(score1)
console.log (typeof valueInNumber1);

let score2 = "33abc"
console.log (typeof score2)
console.log (typeof (score2))
let valueInNumber2 = Number(score2)
console.log (typeof valueInNumber2)
console.log (valueInNumber2);

let score3 = null
console.log (typeof score3)
console.log (typeof (score3))
let valueInNumber3 = Number(score3)
console.log (typeof valueInNumber3)
console.log (valueInNumber3);

let score4 = undefined
console.log (typeof score4)
console.log (typeof (score4))
let valueInNumber4 = Number(score4)
console.log (typeof valueInNumber4)
console.log (valueInNumber4);

let score5 = true
console.log (typeof score5)
console.log (typeof (score5))
let valueInNumber5 = Number(score5)
console.log (typeof valueInNumber5)
console.log (valueInNumber5);

let score6 = "pratip"
console.log (typeof score6)
console.log (typeof (score6))
let valueInNumber6 = Number(score6)
console.log (typeof valueInNumber6)
console.log (valueInNumber6);

// "33" => 33
// "33abc" => NaN
// true = 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

let isLoggedIn2 = "pratip"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

// 1 = true; 0 = false
// "" = false
// "pratip" => true

let someNumber = 33
let stringNumber = String (someNumber)
console. log(stringNumber);
console. log (typeof stringNumber);


//*******************************************  OPERATIONS  ***************************************

let value = 3 
let NegValue = -value
console.log (NegValue)

let value1 = 3 
value1 = -value1
console.log (value1)

const value2 = 3
value2 = -value2 
console.log("value2" + value2)

// console. log(2+2);
// console. log (2-2);
// console. log (2*2);
// console. log (2**3);
// console. log (2/3);
// console. 10g (2%3);|

let str1 = "hello"
let str2 = " pratip"
let str3 = str1 + str2
console.log (str3);


//this is for understand only, not the right way to write the code
//As soon as a string enters a chain of + operations, everything that follows gets converted into a string unless grouped with parentheses (e.g., "1" + (2 + 2) would yield "14")
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log("1" + (2 + 2)); //14
console.log (1 + 2 + "2"); // 32 //for this one 1st conversion then string comes like 1+2 = 3 then string 2 = 32
console. log( (3 + 4) * 5 % 3);

console. log(+true);
console. log (+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2

let gameCounter = 100 
gameCounter ++
console. log (gameCounter);

let gameCounter1 = 100 
++gameCounter1 
console. log (gameCounter1);