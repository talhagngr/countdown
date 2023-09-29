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

  const checkButton = document.getElementById('checkButton');
    const timerText = document.getElementById('timerText');
   
    // Log the initial state to the console.
    console.log('Initial Consecutive Days:', localStorage.getItem('consecutiveDays') || 0);
   
    // When checkButton is clicked, increment consecutiveDays in Local Storage.
    checkButton.addEventListener('click', function() {
        let consecutiveDays = parseInt(localStorage.getItem('consecutiveDays') || 0);
        console.log('Before Increment:', consecutiveDays); // Log before increment
        consecutiveDays++;
        localStorage.setItem('consecutiveDays', consecutiveDays.toString());
        console.log('After Increment:', consecutiveDays); // Log after increment
        updateTimerText();
    });

    function updateTimerText() {
        const consecutiveDays = localStorage.getItem('consecutiveDays') || 0;
        timerText.innerHTML = `Timer: ${consecutiveDays} days`;
    }
    updateTimerText(); // Run this function once when the page loads to set initial text.
});
