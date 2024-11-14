let score = 0;
let pointsPerClick = 1;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');

// Збільшення очок при кліку
clickButton.addEventListener('click', () => {
    score += pointsPerClick;
    updateScore();
});

// Покращення, яке збільшує очки за клік
upgradeButton.addEventListener('click', () => {
    if (score >= 10) {
        score -= 10;
        pointsPerClick += 1;
        updateScore();
        upgradeButton.textContent = `Підвищити рівень (${10 * pointsPerClick} очок)`;
    } else {
        alert('Недостатньо очок для покращення!');
    }
});

// Оновлення відображення очок
function updateScore() {
    scoreDisplay.textContent = `Очки: ${score}`;
}
