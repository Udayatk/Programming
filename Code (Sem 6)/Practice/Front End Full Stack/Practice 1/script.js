// Example of manipulating HTML content with innerHTML
var contentDiv = document.getElementById("contentDiv");

// Get the initial inner HTML content
var initialContent = contentDiv.innerHTML;
console.log("Initial innerHTML content:", initialContent);

// Set new inner HTML content
contentDiv.innerHTML = "<p>New content set via innerHTML</p>";

// Example of manipulating value of an input field with .value
var inputField = document.getElementById("inputField");

// Get the initial value of the input field
var initialValue = inputField.value;
console.log("Initial value of input field:", initialValue);

// Set new value for the input field
inputField.value = "New value set via .value";
