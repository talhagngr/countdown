document.addEventListener('DOMContentLoaded', function() {
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

    // New code for timer with check button
    const checkButton = document.getElementById('checkButton');
    const timerText = document.getElementById('timerText');
    const currentDateStr = new Date().toDateString(); // Get current Date as String
   
    // When checkButton is clicked, set lastChecked and timerStartDate in Local Storage.
    checkButton.addEventListener('click', function () {
        if (!localStorage.getItem('timerStartDate')) {
            localStorage.setItem('timerStartDate', currentDateStr);
        }
        localStorage.setItem('lastChecked', currentDateStr);
        updateTimerText();
    });

    function updateTimerText() {
        const lastChecked = localStorage.getItem('lastChecked');
        if (lastChecked === currentDateStr) {
            const timerStartDate = new Date(localStorage.getItem('timerStartDate'));
            const elapsedDays = Math.floor((new Date() - timerStartDate) / (1000 * 60 * 60 * 24));
            timerText.innerHTML = `Timer: ${elapsedDays} days`;
        } else {
            // Reset timer if not checked today.
            localStorage.setItem('timerStartDate', currentDateStr);
            localStorage.removeItem('lastChecked');
            timerText.innerHTML = 'Timer: 0 days';
        }
    }

    updateTimerText(); // Run this function once when the page loads to set initial text.
});
