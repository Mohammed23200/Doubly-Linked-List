// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Find the "L_R" button
    const lrButton = document.querySelector('.button .content span[data-label="R"]').closest('.button');

    // Attach the "click" event listener to the button
    lrButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default page reload if necessary

        // Get the fade overlay element
        const fadeOverlay = document.querySelector('.fade-overlay');

        // Add the "active" class to trigger the fade-out effect
        fadeOverlay.classList.add("active");

        // Wait for the fade-out animation to complete, then navigate
        setTimeout(() => {
            window.location.href = "two_button/length_recusive.html"// Redirect to the target page
        }, 500); // Match the CSS transition duration (500ms)
    });
});