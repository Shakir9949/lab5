import { toUpperCase } from './stringModule.js';

// Math functions
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Default export for multiplication
export default function multiply(a, b) {
    return a * b;
}

// Function to add two numbers and log the uppercase result
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    return toUpperCase(result.toString());
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const addButton = document.getElementById("addBtn");
    const subtractButton = document.getElementById("subtractBtn");
    const multiplyButton = document.getElementById("multiplyBtn");
    const upperAddButton = document.getElementById("upperAddBtn");
    const resultDisplay = document.getElementById("mathResult");

    // Event listener for addition
    addButton.addEventListener("click", () => {
        resultDisplay.textContent = `Result: ${add(
            parseFloat(num1Input.value),
            parseFloat(num2Input.value)
        )}`;
    });

    // Event listener for subtraction
    subtractButton.addEventListener("click", () => {
        resultDisplay.textContent = `Result: ${subtract(
            parseFloat(num1Input.value),
            parseFloat(num2Input.value)
        )}`;
    });

    // Event listener for multiplication
    multiplyButton.addEventListener("click", () => {
        resultDisplay.textContent = `Result: ${multiply(
            parseFloat(num1Input.value),
            parseFloat(num2Input.value)
        )}`;
    });

    // Event listener for uppercase addition
    upperAddButton.addEventListener("click", () => {
        resultDisplay.textContent = `Uppercase Add Result: ${addAndLogUpper(
            parseFloat(num1Input.value),
            parseFloat(num2Input.value)
        )}`;
    });
});