// Select the button and the output paragraph
const actionBtn = document.getElementById("actionBtn");
const output = document.getElementById("output");

// Keep track of how many times the button is clicked
let clickCount = 0;

// Function that runs on every click
function showMessage() {
  clickCount++;
  output.classList.remove("hidden");
  output.textContent =
    "Congratulations! JavaScript is working. (Clicks: " + clickCount + ")";
}

// Attach the click event to the button
actionBtn.addEventListener("click", showMessage);
