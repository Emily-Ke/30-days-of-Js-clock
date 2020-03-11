const clockElement = document.getElementById('clock');

const printTime = () => {
  const current_time_as_date = new Date()
  clockElement.textContent = current_time_as_date.toLocaleTimeString('en-US', { hour12: false })
}

printTime();
setInterval(printTime, 1000);