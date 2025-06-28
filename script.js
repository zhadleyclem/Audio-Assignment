const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const volumeControl = document.getElementById('volumeControl');

const playedLabel = document.getElementById('playedLabel');
const pausedLabel = document.getElementById('pausedLabel');
const volumeLabel = document.getElementById('volumeLabel');
const durationLabel = document.getElementById('durationLabel');
const currentTimeLabel = document.getElementById('currentTimeLabel');

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
  volumeLabel.textContent = `Volume: ${audio.volume.toFixed(1)}`;
});

audio.addEventListener('play', () => {
  playedLabel.textContent = 'Played: Yes';
  pausedLabel.textContent = 'Paused: No';
});

audio.addEventListener('pause', () => {
  pausedLabel.textContent = 'Paused: Yes';
});

audio.addEventListener('loadedmetadata', () => {
  durationLabel.textContent = `Duration: ${audio.duration.toFixed(2)}`;
});

audio.addEventListener('timeupdate', () => {
  currentTimeLabel.textContent = `Current Time: ${audio.currentTime.toFixed(2)}`;
});
