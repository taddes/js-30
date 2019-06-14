const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours()
  console.log({seconds, minutes, hours})

  // Translate seconds into degrees
  const secondsDegrees = ((seconds / 60) * 360) + 90; // + 90 here to offset the initial 90 deg
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;

  // Transform elements, rotate hands based on times
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

}

setInterval(setDate, 1000);