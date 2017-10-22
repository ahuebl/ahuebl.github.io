/* Use for a 
   multi-line comment in js */

   function copyInputToOutput() {
    let inputText = getEleText("text01");
    // let inputElement = document.getElementById("inputText");
    // let inputText = inputElement.value;
    // alert(inputText);
    let outputElement = document.getElementById("text02");
    outputElement.value = inputText;
}

// Convenience function to get HTML element
// Pass in the element ID as a string
function getE(id) {
    return document.getElementById(id);
}

// Return the value property of an HTML element
// Pass in the element ID as a string
function getEleText(id) {
    return getE(id).value;
}

// Simple function to test our setup
function test() {
    alert("Testing getEleText(): " + getEleText("stuff"));
}

function readText () {
    // Grab the input element from the document
    let inputItem = document.getElementById("stuff");
    // Grab the text from the input element
    let theText = inputItem.value;
    // Demonstrate...
    alert("value is " + theText);
    let theTextUpper = theText.toUpperCase();
    // inputItem.value = theTextUpper;
    // Grab the output element from the document
    let outputItem = document.getElementById("stuff2");
    outputItem.value = theTextUpper;
}

// WORK DONE IN CLASS ON TUES. 10/10

/* NOTE: The Input: and Output: elements are INTERNAL
         inputs and outputs. Input from HTML elements
         and output to HTML elements is EXTERNAL input
         and output. */

// Cube the number input and return it
//   Parameters:
//      Input: The number to cube
//      Output: The result of input^3
function cube(inputNumber) {
    let outputValue;
    outputValue = inputNumber * inputNumber * inputNumber;
    return outputValue;
}

// Test the cube() function, pass it a number
//    and alert the result. 3 --> 27
// Input: none
// Output: none
function testCube() {
    let numToCube = 3;
    let result = cube(numToCube);
    alert(result);
}


// Create a list of numbers
// Input: How many numbers
//        Where to start the number string
//        What separates the values
// Output: A string of the numbers separated 
//         by line breaks '\n'
function createNumberString(startNumber, howMany, separator) {
    if (!separator) {   // default to \n if a separator is not passed in
        separator = '\n';
    }
    let result = "";
    let loopCounter = startNumber;
    let maxNumber = startNumber + howMany;

    while (loopCounter < maxNumber) {
        result = result + loopCounter + separator;
        loopCounter = loopCounter + 1;
        // or loopCounter += 1;
        // ++loopCounter; use this one*
        // loopCounter++; don't use
    }
    return result;
}

// Print the numbers from 0...howMany to a text area
// Input: How many numbers to print
// Output: none
function outputNumbers(howMany) {
    let textBox1 = document.getElementById("text01");
    textBox1.value = ""; // clear text box
    // for looping structure...
    //  initialize     test     increment
   /*
    for (let i = 0; i < howMany; i += 1) {
    textBox1.value = textBox1.value + i + '\n';
    } */
    textBox1.value = createNumberString(-1, howMany, '\n');
}

// UTILITY FUNCTIONS  - IN CLASS Oct. 17

// clear textarea "text01"
function clrTxt() {
    let textArea = document.getElementById("text01");
    textArea.value = "";
}

// Print(...)
// Prints the argument to textarea "text01"
//    or to the element with value in ID.
// NO LINE BREAK
function print(str, id) {
    if (id === undefined || id === null) {
        id = "text01";
    }
    let textArea = getEle(id);
    textArea.value = textArea.value + str;
}

// Print(...)
// Prints the argument to textarea "text01"
//    or to the element with value in ID.
// YES, LINE BREAK
function println(str, id) {
    // (!undefined)
    if (str === undefined) {  // was a value passed?
        str = "";
    }
     print(str + '\n', id);
}

function testPrint() {
    clrTxt();
    let txt = getEleText("stuff");
    print("testing 1 2 3", "stuff2");
    println(txt);
    print("hello world");
    println(", have a nice day");
    println();
    println("See you later");
    println("yes indeed", "text02");
    println("it worked!!", "text02");
}

// Get an HTML element from the document by using the 
//    element ID property
function getEle(id) {
    return document.getElementById(id);
}

// Get the text (the value property) from an 
//   input box or a textarea given the HTML ID
function getEleText(id) {
    return getEle(id).value;
}

// Call the outputNumber() function
// Input: none
// Output: none
function textAreaExample() {
    outputNumbers(10);
    //alert("is this working?");
}

// Demonstrate working with a text area and an input box
// Get the two HTML elements
// Add the text from the input box to the text box
// Input: none
// Output: none
function textAreaExample2() {
    let textBox1 = document.getElementById("text01");
    //alert("test");
    //textBox1.value = "";   // clear the text boc, not needed
    let inputBox1 = document.getElementById("stuff");
    let inputText = inputBox1.value;
    // assign the current value, the line break, and the new value
    textBox1.value = inputText + '\n' + textBox1.value;
    // Optional example below, comment out to disable
    // example of splitting a string on a specific character
    //let names = textBox1.value.split('\n');
    // assign the resulting array to the text box
    //textBox1.value = names;
}

// Demonstrate reading/writing with input boxes
// Input: none
// Output: none
function readText () {
    // Grab the input element from the document
    let inputItem;
    inputItem = document.getElementById("stuff");
    // Grab the text from the input element
    let theText = inputItem.value;
    // Demonstrate...
    alert("value is " + theText);
    // Convert the text to uppercase
    let theTextUpper = theText.toUpperCase();
    // Grab the output element from the document
    let outputItem = document.getElementById("stuff2"); 
    // Put the text into the output input box
    outputItem.value = theTextUpper;
}

function textAreaExample3() {
    let inputText = document.getElementById("stuff");
    let theInputText = inputText.value
    let outputText = document.getElementById("text01");
    //theInputText.value = outputText;
    outputText.value = theInputText + '\n' + outputText.value; 
}
 function doIt (param) {
     param = 2;
 }

 var test = 1;
 doIt(test);
 alert(test);
