/* Use for a 
   multi-line comment in js */

function copyInputToOutput() {
    let inputText = getEleText("inputText");
    // let inputElement = document.getElementById("inputText");
    // let inputText = inputElement.value;
    // alert(inputText);
    let outputElement = document.getElementById("outputText");
    outputElement.value = inputText;
}

// Convenience function to get HTML element
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