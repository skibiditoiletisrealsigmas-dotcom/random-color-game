let targetColor;
let options = [];
const colorDisplay = document.getElementById('color-display');
const rgbValue = document.getElementById('rgb-value');
const optionsContainer = document.getElementById('options-container');
const messageDisplay = document.getElementById('message');
const resetBtn = document.getElementById('reset-btn');

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function initGame() {
    options = [];
    messageDisplay.textContent = "";
    optionsContainer.innerHTML = "";
    
    // Generate target color
    targetColor = generateRandomColor();
    colorDisplay.style.backgroundColor = targetColor;
    rgbValue.textContent = targetColor.toUpperCase();
    
    // Generate 6 options, one of which is the target
    const targetIndex = Math.floor(Math.random() * 6);
    
    for (let i = 0; i < 6; i++) {
        const btn = document.createElement('button');
        btn.classList.add('color-option');
        
        const color = (i === targetIndex) ? targetColor : generateRandomColor();
        btn.style.backgroundColor = color;
        
        btn.addEventListener('click', function() {
            if (color === targetColor) {
                messageDisplay.textContent = "Correct! 🎉";
                messageDisplay.style.color = "#4CAF50";
                // Change all buttons to target color
                document.querySelectorAll('.color-option').forEach(b => {
                    b.style.backgroundColor = targetColor;
                    b.style.opacity = "1";
                });
            } else {
                messageDisplay.textContent = "Try Again! ❌";
                messageDisplay.style.color = "#f44336";
                this.style.opacity = "0";
                this.style.cursor = "default";
            }
        });
        
        optionsContainer.appendChild(btn);
    }
}

resetBtn.addEventListener('click', initGame);

// Start the game
initGame();
