// Selectors
const video = document.querySelector('#about video');
const videoPlayBtn = document.querySelector('#play-btn')

// Events
videoPlayBtn.addEventListener('click', () => {
    if(video.paused){
        video.play();
        videoPlayBtn.style.opacity = 0;
    }else {
        video.pause()
    }
})