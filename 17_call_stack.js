/*
Now understand the Call Stack
The Call Stack keeps track of which functions are currently being executed.
Think of it like a stack of plates.
      ┌────────────┐
      │   add()    │ ← last added
      ├────────────┤
      │   main     │
      └────────────┘
The important rule is:
LIFO — Last In, First Out
The last thing put into the stack is the first thing removed.

Simple Call Stack example
Consider:
*/

function one() {
    console.log("One");
}
function two() {
    console.log("Two");
}
one();
two();

/* Initially:
CALL STACK
──────────
Global
JavaScript reaches:
*/
one();

/* So:
CALL STACK
──────────
one()
Global
one() executes:
One
Then it finishes and is removed:
CALL STACK
──────────
Global
Then JavaScript reaches:
*/

two();

/* Now:
CALL STACK
──────────
two()
Global
two() finishes:
CALL STACK
──────────
Global
Eventually the program finishes.
*/

// Nested functions make Call Stack clearer
// Consider:

function one() {
    two();
}
function two() {
    three();
}
function three() {
    console.log("Hello");
}
one();

// What happens?
// Step 1
one();
// Call stack:
// one()
// Global

// Step 2 : Inside one():

two();

// Call stack:
// two()
// one()
// Global
// Step 3 : Inside two():

three();

// Call stack:
// three()
// two()
// one()
// Global

// Step 4 : three() finishes.
// two()
// one()
// Global

// Step 5 : two() finishes.
// one()
// Global

// Step 6 : one() finishes.
// Global

// Step 7 : Program finishes.
// EMPTY

// This is LIFO : LAST IN FIRST OUT

/*
Visualize it like a stack of plates
Imagine:
       THREE
       ─────
        TWO
       ─────
        ONE
       ─────
       GLOBAL
You can't remove ONE first because THREE is on top.
So:
THREE → removed
TWO   → removed
ONE   → removed
GLOBAL
That's exactly how the call stack works conceptually.

---------------------------------------------------------------------------------------------
Execution Context vs Call Stack
>> These two terms can easily confuse you.
Execution Context:
The environment where code is being executed.

Call Stack :
The structure JavaScript uses to keep track of active function calls.

Think:
Execution Context
       ↓
"Where is this code running?"

Call Stack
       ↓
"Which function is currently running,
and what called it?"
*/
