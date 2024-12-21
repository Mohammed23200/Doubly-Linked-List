let clickCount = 0;
const maxClicks = 1;

// Grab elements from the DOM
const button = document.getElementById('actionButton');
const button1 = document.querySelector('.button1'); // "current" button
const verticalArrow = document.querySelector('.vertical-arrow'); // Pseudo-element container
const button2Div = document.querySelector('.button2'); // "length" text div

button.addEventListener('click', () => {
    if (clickCount < maxClicks) {
        clickCount++;

        // Adjust positions based on click count
        if (clickCount === 1) {
            // Move "current" button (button1) to the first position
            button1.style.transition = 'left 1s ease-in-out';
            button1.style.left = '650px'; // Position for "Prev A"

            // Move vertical arrow's pseudo-elements to "Prev A"
            verticalArrow.style.setProperty('--before-left', '693px');
            verticalArrow.style.setProperty('--after-left', '689px');
        }

        // Animate the "next step" button state
        button.querySelector('.state--default').style.display = 'none';
        button.querySelector('.state--sent').style.display = 'flex';

        // Return to normal state after the animation
        setTimeout(() => {
            button.querySelector('.state--default').style.display = 'flex';
            button.querySelector('.state--sent').style.display = 'none';
        }, 1000);
    } else {
        // Add an animation to the body and navigate to the new page after the animation completes
        document.body.classList.add('page-exit'); // Add exit animation class
        setTimeout(() => {
            window.location.href = 'card_search_draw.html'; // Redirect to the new page
        }, 700); // Match this timing with the CSS transition duration
    }
});