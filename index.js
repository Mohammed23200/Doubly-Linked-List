function Length_Iterative() {
    window.location.href = 'pages/theTwoButton.html';
}

function Length_Recursive() {
    window.location.href = 'pages/theTwoButton.html';
}

function Swap() {
    window.location.href = 'pages/theTwoButton.html';
}

function Reverse() {
    window.location.href = 'pages/theTwoButton.html';
}

function Merge() {
    window.location.href = 'pages/theTwoButton.html';
}

function Max() {
    window.location.href = 'pages/theTwoButton.html';
}

function Min() {
    window.location.href = 'pages/theTwoButton.html';
}

function Sum() {
    window.location.href = 'pages/theTwoButton.html';
}

function Aver() {
    window.location.href = 'pages/theTwoButton.html';
}

function Median() {
    window.location.href = 'pages/theTwoButton.html';
}

function StrDev() {
    window.location.href = 'pages/theTwoButton.html';
}

function Max_Second() {
    window.location.href = 'pages/theTwoButton.html';
}

function Min_Second() {
    window.location.href = 'pages/theTwoButton.html';
}

function Split() {
    window.location.href = 'pages/theTwoButton.html';
}

function Insert() {
    window.location.href = 'pages/theTwoButton.html';
}

function Sorted() {
    window.location.href = 'pages/theTwoButton.html';
}

function Even() {
    window.location.href = 'pages/theTwoButton.html';
}

function Odd() {
    window.location.href = 'pages/theTwoButton.html';
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('show'); // Add the show class to make it visible
        }, index * 500); // Delay each button by 300ms multiplied by its index
    });
});
