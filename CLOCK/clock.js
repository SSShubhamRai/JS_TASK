function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Get the current date and day
    const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });
    const date = now.toLocaleString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  
    // Add leading zero if single digit
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Set the time and date display
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${dayOfWeek}, ${date}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();
  