// selected all html id
const progress = document.getElementById("input-range");
const playPause = document.getElementById("play-pause");
const song = document.getElementById("song");

// song onloadedmetadata
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

playPause.addEventListener("click", function () {
  if (playPause.classList.contains("fa-pause")) {
    song.pause();
    playPause.classList.remove("fa-pause");
    playPause.classList.add("fa-play");
  } else {
    song.play();
    playPause.classList.add("fa-pause");
    playPause.classList.remove("fa-play");
  }
});
if (song.play()) {
  song.volume = 0.2;
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  playPause.classList.add("fa-pause");
  playPause.classList.remove("fa-play");
};
