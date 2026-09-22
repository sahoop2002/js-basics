// Stack (Primitive), Heap (Non-Primitive)
// from stack we can get only copy of the data but when we keep our data in heap we can get or access the reference or original data 

let myYoutubename = "pratipdotcom"

let anothername = myYoutubename
anothername = "hey buddy"
console. log (myYoutubename ); 
console. log (anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "pratip@google.com"
console.log(userOne.email)
console.log(userTwo.email)
