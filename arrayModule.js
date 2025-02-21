// Function to find the maximum value in an array
export function findMax(arr) {
    return Math.max(...arr);
}

// Function to reverse an array
export function reverseArray(arr) {
    return arr.reverse();
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const arrayInput = document.getElementById("arrayInput");
    const maxButton = document.getElementById("findMaxBtn");
    const reverseButton = document.getElementById("reverseArrayBtn");
    const arrayResult = document.getElementById("arrayResult");

    maxButton.addEventListener("click", () => {
        const arr = arrayInput.value.split(',').map(Number);
        arrayResult.textContent = `Max Value: ${findMax(arr)}`;
    });

    reverseButton.addEventListener("click", () => {
        const arr = arrayInput.value.split(',').map(Number);
        arrayResult.textContent = `Reversed: ${reverseArray(arr).join(', ')}`;
    });
});