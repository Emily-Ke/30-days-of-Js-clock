const handsElements = document.querySelectorAll('.hands');
const [secondHandElement, minuteHandElement, hourHandElement] = handsElements;
const digitalClockElement = document.querySelector('.digital-clock');

const defaultHandRotationOffset = 90;
const defaultTransition = 'all 0.1s';

const printClocks = () => {
  const current_time_as_date = new Date()

  const seconds = current_time_as_date.getSeconds();
  secondHandElement.style.transition = seconds === 0 ? 'none' : defaultTransition;
  const secondsToDegrees = seconds / 60 * 360 ;
  secondHandElement.style.transform = `rotate(${secondsToDegrees + defaultHandRotationOffset}deg)`;

  const minutes = current_time_as_date.getMinutes();
  minuteHandElement.style.transition = minutes === 0 ? 'none' : defaultTransition;
  const minutesToDegrees = minutes / 60 * 360 ;
  minuteHandElement.style.transform = `rotate(${minutesToDegrees + defaultHandRotationOffset}deg)`;

  const hours = current_time_as_date.getHours();
  hourHandElement.style.transition = hours === 0 || hours === 12 ? 'none': defaultTransition;
  hoursToDegrees = hours / 12 * 360 ;
  hourHandElement.style.transform = `rotate(${hoursToDegrees + defaultHandRotationOffset}deg)`;

  digitalClockElement.textContent = current_time_as_date.toLocaleTimeString('en-US', { hour12: false })
}

handsElements.forEach(hand => hand.style.transition = 'rotate 2s');
printClocks();
setInterval(printClocks, 1000);