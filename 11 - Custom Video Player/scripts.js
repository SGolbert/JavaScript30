const playButton = document.querySelector('.toggle');
const video = document.querySelector('video');
const volume = document.querySelector('input[name="volume"]');
const playRate = document.querySelector('input[name="playbackRate"]');
const goBack = document.querySelector('button[data-skip="-10"]');
const goForward = document.querySelector('button[data-skip="25"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function toggleVideo() {
    video.paused ? video.play() : video.pause();
}

function handleProgress(e) {
    const playedPerc = e.layerX * 100 / progress.clientWidth;
    progressFilled.style.flexBasis = playedPerc + '%';

    video.currentTime = video.duration * playedPerc / 100;
}

playButton.addEventListener('click', toggleVideo);

volume.addEventListener('input', () => {
    video.volume = volume.value;
});

playRate.addEventListener('input', () => {
    video.playbackRate = playRate.value;
});

goBack.addEventListener('click', () => {
    video.currentTime -= 10;
});

goForward.addEventListener('click', () => {
    video.currentTime += 25;
});


let mouseDown = false;

progress.addEventListener('mousedown', () => {
    mouseDown = true;
});
progress.addEventListener('click', handleProgress);
progress.addEventListener('mousemove', (e) => {
    if (mouseDown)
        handleProgress(e);
});
progress.addEventListener('mouseup', () => {
    mouseDown = false;
});

video.addEventListener('timeupdate', () => {
    progressFilled.style.flexBasis = (video.currentTime * 100 / video.duration) + '%';
});
video.addEventListener('click', toggleVideo);
video.addEventListener('play', () => {
    playButton.firstChild.data = '⏸';
});
video.addEventListener('pause', () => {
    playButton.firstChild.data = '►';
});
video.addEventListener('click', toggleVideo);

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 32)
        toggleVideo();
})