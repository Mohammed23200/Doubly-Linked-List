// index.js

// Function to handle button clicks
function handleButtonClick(event) {
    // Get the target URL from the data attribute
    const targetUrl = event.currentTarget.getAttribute('data-target');

    // Get the fade overlay element
    const fadeOverlay = document.querySelector('.fade-overlay');

    // Add the active class to trigger the fade animation
    fadeOverlay.classList.add('active');

    // Wait for the animation to complete before navigating
    setTimeout(() => {
        window.location.href = "theTwoButton.html";
    }, 500); // Match this duration with the CSS transition duration
}
// Get all buttons in the button container
const buttons = document.querySelectorAll('.button');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
// index.js

// Function to handle button clicks


// Get all buttons in the button container


// Add click event listeners to each button
let currentIndex = 0; // Current position of the pointer
const buttons = document.querySelectorAll(".button-container button");
const pointer = document.querySelector(".pointer");
const nextStepButton = document.getElementById("nextStep");

nextStepButton.addEventListener("click", () => {
    if (currentIndex < buttons.length - 2) {
        currentIndex++; // Move to the next button
        const targetButton = buttons[currentIndex];
        const buttonRect = targetButton.getBoundingClientRect();
        const containerRect = document.querySelector(".button-container").getBoundingClientRect();

        // Calculate new position for the pointer
        const newTop = buttonRect.top - containerRect.top + buttonRect.height / 2;
        const newLeft = buttonRect.left - containerRect.left;

        // Apply new position with animation
        pointer.style.top = `${newTop}px`;
        pointer.style.left = `${newLeft - 10}px`;
    }
});
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
    alert('Search button clicked!'); // Replace with your action
});