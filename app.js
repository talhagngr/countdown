document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('2023-05-19T00:00:00');
    const currentDate = new Date();

    if (currentDate < targetDate) {
        countdownElement.innerHTML = 'The target date has not arrived yet.';
    } else {
        const diffTime = currentDate - targetDate;
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        countdownElement.innerHTML = days + ' days have passed since 19 May 2023.';
    }

    // Elements and Event Listener for Timer
    const checkButton = document.getElementById('checkButton');
    const timerText = document.getElementById('timerText');
    const indicator = document.getElementById('indicator'); // Make sure this element exists in your HTML

    checkButton.addEventListener('click', function () {
        const todayStr = new Date().toDateString();
        const lastPressedStr = localStorage.getItem('lastPressed') || '';

        if (todayStr !== lastPressedStr) {
            let consecutiveDays = parseInt(localStorage.getItem('consecutiveDays') || '0');
            consecutiveDays++;
            localStorage.setItem('consecutiveDays', consecutiveDays.toString());
            localStorage.setItem('lastPressed', todayStr);
        }

        updateUI();
    });

    function updateUI() {
        const todayStr = new Date().toDateString();
        const lastPressedStr = localStorage.getItem('lastPressed') || '';
        const consecutiveDays = localStorage.getItem('consecutiveDays') || '0';

        timerText.innerHTML = `Timer: ${consecutiveDays} day${consecutiveDays !== '1' ? 's' : ''}`;
        indicator.className = todayStr === lastPressedStr ? 'green' : 'red'; // Update the indicator color
    }

    updateUI(); // Run this function once when the page loads to set the initial state.
});
