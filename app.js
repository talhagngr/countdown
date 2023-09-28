function setDate() {
    const inputElement = document.getElementById('dateInput');
    const countdownElement = document.getElementById('countdown');
    const selectedDate = new Date(inputElement.value);
    const currentDate = new Date();
    
    const diffTime = selectedDate - currentDate;
    if(diffTime > 0) {
        // Future Date
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        countdownElement.innerHTML = days + ' days until ' + selectedDate.toDateString();
    } else {
        // Past Date
        const days = Math.floor(Math.abs(diffTime) / (1000 * 60 * 60 * 24));
        countdownElement.innerHTML = days + ' days since ' + selectedDate.toDateString();
    }
}
