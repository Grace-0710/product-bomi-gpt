
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.getElementById('numbers');
    const pastWinnersToggle = document.getElementById('past-winners-toggle');
    const pastWinnersList = document.getElementById('past-winners-list');
    const arrow = document.querySelector('.arrow');

    generateBtn.addEventListener('click', () => {
        generateAndDisplayNumbers();
    });

    pastWinnersToggle.addEventListener('click', () => {
        pastWinnersList.classList.toggle('expanded');
        arrow.classList.toggle('expanded');
    });

    function generateAndDisplayNumbers() {
        numbersDisplay.innerHTML = ''; // Clear previous numbers
        const numbers = generateUniqueNumbers(6, 1, 45);
        numbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.className = 'number';
            numberElement.textContent = number;
            numbersDisplay.appendChild(numberElement);
        });
    }

    function generateUniqueNumbers(count, min, max) {
        const numbers = new Set();
        while (numbers.size < count) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }
});
