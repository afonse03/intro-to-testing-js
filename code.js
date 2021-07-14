// helloWorld function 
function helloWorld() {
    return "Hello, World!";
} //closing curly brace

// **if we remove 'World', then the tests fail. Is there something connecting to this function that we need to update the name on?**
// **if we replace "Hello, World!" with "Hello", then we only fail the test that says "should return the string "Hello, World!" when executed**
// **if we update 'return "Hello, World!"' to read 'console.log("Hello, World!")', then we fail 'should return a string when called, should return the string "Hello, World!" when executed, and should never return 'undefined' when called
// **if we remove the closing curly brace, then we receive all the errors; this is considered a syntax error
// *go back to step #6 where you replace the function statement for helloWorld with a function expression. What the hell is a function expression? If we change 'helloWorld' with 'helloUSA', then we get all the failures. Why? Don't forget that functions are first class citizens in the JS language.

function sayHello() {
    return "Hello, World!";
}