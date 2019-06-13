

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop execution of function
  audio.currentTime = 0 // rewind to start so you don't have to wait for it to play
  audio.play()
  console.log(key)
  key.classList.add('playing')
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return // skip if it's not a transform
  console.log(e.propertyName);
  console.log(this) // this refers to caller of event
  this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)