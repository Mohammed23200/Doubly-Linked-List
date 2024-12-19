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
