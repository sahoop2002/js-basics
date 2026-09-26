/* What happens inside JavaScript when this code runs?
The basic flow is:
Your JavaScript code
        ↓
JavaScript creates Execution Context
        ↓
Memory is created
        ↓
Code is executed
        ↓
Functions are put on the Call Stack
        ↓
Functions finish
        ↓
They are removed from Call Stack

Global Execution Context
Created when your JavaScript program starts.
JavaScript starts
      ↓
Global Execution Context
Function Execution Context
Created whenever a function is called.
*/
function add() {
    // ...
}
 add();
/* When add() runs:
Global Execution Context
        ↓
Function Execution Context for add()
Created whenever a function is called.
JavaScript starts
      ↓
Global Execution Context

The Global Execution Context
Suppose you have:
*/

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    return num1 + num2;
}

let result = addNum(val1, val2);

/* When JavaScript starts, it first creates a Global Execution Context.
Think:
GLOBAL EXECUTION CONTEXT
─────────────────────────
Your entire program starts here
JavaScript works in two important phases
This is the part you should memorize.
JavaScript's execution is explained here in two phases:
Phase 1 — Memory Creation Phase
JavaScript prepares memory for variables/functions.
Phase 2 — Execution Phase
JavaScript actually executes the code and assigns values.
So:
Execution Context
      ↓
┌─────────────────────┐
│ 1. Memory Creation  │
└─────────────────────┘
      ↓
┌─────────────────────┐
│ 2. Execution        │

Memory Creation Phase
*/
let val3 = 10;
let val4 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);

/* uring the memory creation phase, JavaScript prepares space for these things.

Conceptually:

val1    → undefined
val2    → undefined
addNum  → function definition
result  → undefined

JavaScript needs to execute the function.

So it creates a new execution context for addNum.
Think:
GLOBAL EXECUTION CONTEXT
          ↓
      addNum()
          ↓
NEW FUNCTION EXECUTION CONTEXT

Function Execution Context

Inside:
*/

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

/* JavaScript creates a new environment for this function.
Conceptually, the memory phase looks like:
num1  → undefined
num2  → undefined
total → undefined
Then arguments are passed:
*/
 addNum(10, 5);
/* So during execution:
num1 → 10
num2 → 5
Then: */
 let total = num1 + num2;
/* becomes:
 total → 15
 Then: */
 return total;
/* returns: 15
to the place where the function was called.
Therefore: */
let result2 = addNum(10, 5);
/* becomes:
result → 15
What happens to the function execution context?
Once: */

addNum()

/* has finished: Its execution context is removed.

Think:
Create function context
        ↓
Execute function
        ↓
Return result
        ↓
Remove function context
Then JavaScript continues with the global execution context.
*/