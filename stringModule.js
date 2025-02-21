// Convert string to uppercase
export function toUpperCase(str) {
    return str.toUpperCase();
}

// Convert string to lowercase
export function toLowerCase(str) {
    return str.toLowerCase();
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const upperCaseBtn = document.getElementById("upperCaseBtn");
    const lowerCaseBtn = document.getElementById("lowerCaseBtn");
    const stringResult = document.getElementById("stringResult");

    upperCaseBtn.addEventListener("click", () => {
        stringResult.textContent = `Uppercase: ${toUpperCase(textInput.value)}`;
    });

    lowerCaseBtn.addEventListener("click", () => {
        stringResult.textContent = `Lowercase: ${toLowerCase(textInput.value)}`;
    });
});