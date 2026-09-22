const name = "pratip"

const repoCount = 50
// console. log (name + repoCount + " Value"); ** this is outdated syntax


// modern way to write a string or string interpolation
console.log( `Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('valorent')
console. log (gameName)
console. log (gameName.__proto__)
console. log (gameName.length)
console. log (gameName. toUpperCase())
console. log (gameName. charAt (2))
console. log (gameName. indexOf ('t' )) 

const gameName2 = new String("valor-ent-new")
const newString = gameName2.substring (0,4) // here we can't give negetive value if we give it also start from zero only
console. log (newString)

const anotherString = gameName. slice(-7, 5)
console. log (anotherString)

const newStringOne = "      pratip    "
console. log (newStringOne)
console. log(newStringOne.trim()) // trim simply remove the starting and end spaces from the word

const url = "https://pratip.com/pratip%20sahoo"
console. log (url. replace('%20', '-'))
console. log (url. includes("pratip")) // finding words in string

console.log(gameName2.split("-"))