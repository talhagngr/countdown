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

    checkButton.addEventListener('click', function() {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Reset time to 00:00:00
        localStorage.setItem('lastChecked', currentDate.toString());
        updateTimerText();
    });

        function updateTimerText() {
        const lastChecked = new Date(localStorage.getItem('lastChecked') || 0);
        lastChecked.setHours(0, 0, 0, 0); // Reset time to 00:00:00

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to 00:00:00

        const dayDifference = (today - lastChecked) / (1000 * 60 * 60 * 24);

        if (dayDifference < 1) {
            timerText.innerHTML = `Timer: ${localStorage.getItem('consecutiveDays') || 0} days`;
        } else if (dayDifference === 1) {
            let consecutiveDays = (localStorage.getItem('consecutiveDays') || 0);
            consecutiveDays = parseInt(consecutiveDays) + 1;
            localStorage.setItem('consecutiveDays', consecutiveDays.toString());
            timerText.innerHTML = `Timer: ${consecutiveDays} days`;
        } else {
            localStorage.setItem('consecutiveDays', '0');
            timerText.innerHTML = 'Timer: 0 days';
        }
    }

    updateTimerText(); // Run this function once when the page loads to set initial text.
});
