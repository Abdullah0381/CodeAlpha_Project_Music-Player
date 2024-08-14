// script.js
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeSlider = document.getElementById('volume');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Example playlist array
const playlist = [
    { src: 'Afterhours - BIR.mp3', title: 'Afterhours ', artist: 'BIR' },
    { src: 'ishq.mp3', title: 'ISHQ', artist: 'Faheem Abdullah' },
    // Add more songs as needed
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = playlist[index];
    audio.src = song.src;
    title.textContent = song.title;
    artist.textContent = song.artist;
    if (isPlaying) {
        audio.play();
    }
}

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Load the first song initially
loadSong(currentSongIndex);
