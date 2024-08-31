
document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.btn');
    function updateDisplay(value) {
        if (display.textContent === '0' || display.textContent === 'Error') {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.textContent;

            if (button.classList.contains('operator') || button.classList.contains('equal-sign')) {

                updateDisplay(buttonValue);
            } else if (button.classList.contains('clear')) {
                display.textContent = '0';
            } else if (button.classList.contains('percentage')) {
                updateDisplay(buttonValue);
            } else if (button.classList.contains('plus')) {

                updateDisplay(buttonValue);
            } else {
                updateDisplay(buttonValue);
            }
        });
    });
});
