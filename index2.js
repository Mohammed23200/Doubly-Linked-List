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

