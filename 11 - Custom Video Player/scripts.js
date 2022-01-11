const toggle = document.querySelector('.player__button');
const video  = document.querySelector('.viewer');
const videoProgressBar = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const ranges = document.querySelectorAll('.player__slider');


function togglePlay(e){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function updateProgressBar(){
    const percentage = (video.currentTime / video.duration)*100;
    videoProgressBar.style.flexBasis = `${percentage}%`;

}

function skipTime(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgressBar);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skipTime));
ranges.forEach(range => {
    range.addEventListener('change', handleRangeUpdate);
    range.addEventListener('change', handleRangeUpdate);
});


let mousedown = false;
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(scrubTime);
}
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', ()  => mousedown = true);
progress.addEventListener('mouseup',   ()  => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown  && scrub(e));


