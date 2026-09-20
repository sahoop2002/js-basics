// variables 
const accountId = 144553
let accountEmail = "pratip@gmail.com"
var accountPassword = " 1443"
accountCity = "kolkata"


// accountId = 111 // not allowed \ TypeError: Assignment to constant variable.
accountEmail = "ps@.com"
accountPassword = "21212"
accountCity = "assam"

let accountState

console.log(accountId);

/* 
prefer not to use var 
because of issue in block scope and functional scope 

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])