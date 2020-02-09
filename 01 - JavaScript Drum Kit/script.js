function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    console.log(`Key: ${e.keyCode} ...`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    key.classList.add('playing');

    // setTimeout(() => {
    //     key.classList.remove('playing');
    // }, 200);

    return;
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));