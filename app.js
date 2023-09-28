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
});
