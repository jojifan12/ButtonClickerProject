// Initialize counter variable
let count = 0;

// Get references to the button and counter display
const button = document.getElementById("clickButton");
const counterDisplay = document.getElementById("counter");

// Add event listener for button click
button.addEventListener("click", function() {
    // Increase the counter value
    count++;

    // Update the counter display dynamically
    counterDisplay.textContent = count;
});
