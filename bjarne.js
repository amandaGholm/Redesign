window.addEventListener("load", start);

function start() {
  const video = document.querySelector("#video_file");
  //   const playBtn = document.querySelector("#play");
  //   const stopBtn = document.querySelector("#stop");
  const volSlider = document.querySelector("#volControl");

  video.addEventListener("click", playVideo);
  //   playBtn.addEventListener("click", playVideo);
  //   stopBtn.addEventListener("click", stopVideo);
  volSlider.addEventListener("change", changeVolume);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url(img/pause_black.svg)";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(img/play_black.svg)";
    }
  }
  function stopVideo() {
    video.pause();
    video.currentTime = 0;
    stopBtn.style.backgroundImage = "url(img/stop_black.svg)";
    playBtn.style.backgroundImage = "url(img/play_black.svg)";
  }

  function changeVolume() {
    console.log(volSlider.value);
    let newVolume = volSlider.value / 100;
    video.volume = newVolume;
  }
}
