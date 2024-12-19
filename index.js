function Length_Iterative() {
    window.location.href = 'theTwoButton.html';
}

function Length_Recursive() {
    window.location.href = 'theTwoButton.html';
}

function Swap() {
    window.location.href = 'theTwoButton.html';
}

function Reverse() {
    window.location.href = 'theTwoButton.html';
}

function Merge() {
    window.location.href = 'theTwoButton.html';
}

function Max() {
    window.location.href = 'theTwoButton.html';
}

function Min() {
    window.location.href = 'theTwoButton.html';
}

function Sum() {
    window.location.href = 'theTwoButton.html';
}

function Aver() {
    window.location.href = 'theTwoButton.html';
}

function Median() {
    window.location.href = 'theTwoButton.html';
}

function StrDev() {
    window.location.href = 'theTwoButton.html';
}

function Max_Second() {
    window.location.href = 'theTwoButton.html';
}

function Min_Second() {
    window.location.href = 'theTwoButton.html';
}

function Split() {
    window.location.href = 'theTwoButton.html';
}

function Insert() {
    window.location.href = 'theTwoButton.html';
}

function Sorted() {
    window.location.href = 'theTwoButton.html';
}

function Even() {
    window.location.href = 'theTwoButton.html';
}

function Odd() {
    window.location.href = 'theTwoButton.html';
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('show'); // Add the show class to make it visible
        }, index * 500); // Delay each button by 300ms multiplied by its index
    });
});

function drawAction() {
    alert("The Draw button clicked!");

}

function codeAction() {
    alert("The Code button clicked!");

}
let step = 1;
let leng = 1;

function nextStep() {
    if (step <= 3) {
        // Update the text in the rectangles
        document.getElementById(`rect${step}`).textContent = leng;
        step++;
        leng++;

        // Update current value
        document.getElementById("current").textContent = `Current: LENG ${leng}`;

        // Change status to Done when completed
        if (step > 3) {
            document.getElementById("status").textContent = "Status: Done";
            document.getElementById("nextStep").disabled = true; // Disable button
        }
    }
}
