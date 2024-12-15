function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = element.style.display === "none" ? "block" : "none";
    } else {
        console.warn(`Элемента "${selector}" нет.`);
    }
}


function handleUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const h1Element = document.querySelector("h1");

    if (h1Element) {
        h1Element.textContent = utmTerm || h1Element.textContent;
    } else {
        console.warn("H1 в странице нет.");
    }
}

function logCurrentTime() {
    const now = new Date();
    const time = now.toTimeString().split(" ")[0];
    console.log(`Время: ${time}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

showMessage("Скрипт загружен");
logCurrentTime(); 

document.addEventListener("DOMContentLoaded", function () {
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility(".content");
    handleUtmTerm();
});