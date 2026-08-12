// NOVA FM — Music Player

const songs = [
    {
        title: "Saiyonee",
        artist: "Hiten",
        file: "Saiyonee - Hiten.mp3",
        image: "S.jpg"
    },
    {
        title: "Tera Mera Rishta Continues",
        artist: "Mithoon, Saaj Bhatt, Subodh Sharma, Sayeed Quadri",
        file: "Tera Mera Rishta Continues (Film Ballad) - (Raag.Fm).mp3",
        image: "AW.jpg"
    },
    {
        title: "Ishqa Ve",
        artist: "Zeeshan Ali, Yuvraj Tung, Seerat Mast, Sandeep Aulakh, Honey Dhillon",
        file: "Ishqa Ve (official video) Zeeshan Ali Yuvraj Tung Seerat Mast Sandeep Aulakh Honey Dhillon.mp3",
        image: "IQ.jpg"
    },
    {
        title: "Barsaat Lagdi Ae",
        artist: "Darshan Raval, Simran Choudhary",
        file: "Barsaat Lagdi Ae (Music Video) - Darshan Raval  Simran Choudhary  Aditi S.  Youngveer  Mir Desai - DarshanRavalDZ.mp3",
        image: "0.jpg"
    },
    
   
    {
        title: "Hangova",
        artist: "Anirudh Ravichander",
        file: "Hangova (From DC) - Anirudh Ravichander.mp3",
        image: "0 (1).jpg"
    },
    {
        title: "Boohe Baarian",
        artist: "Aditya Rikhari, Rochak Kohli, Roshni Walia",
        file: "Boohe Baarian (Official Video) - adityarikhari  Rochak Kohli  Roshni Walia  Bhushan Kumar - T-Series.mp3",
        image: "0 (3).jpg"
    },
    {
        title: "Kabil",
        artist: "Gurnam Bhullar",
        file: "Kabil - Gurnam Bhullar.mp3",
        image: "0 (4).jpg"
    },
    {
        title: "Nede Nede",
        artist: "Coachsahb",
        file: "Nede Nede - Coachsahb.mp3",
        image: "0 (2).jpg"
    },
    {
        title: "Sharmayi Janda Ae",
        artist: "Pragati Nagpal",
        file: "Sharmayi Janda Ae - Pragati Nagpal.mp3",
        image: "SJ.jpg"
    },
    {
        title: "Ye Ishq Hai",
        artist: "Shreya Ghoshal",
        file: "Ye Ishq Hai - Shreya Ghoshal.mp3",
        image: "YI.jpg"
    },
    {
        title: "Aa Jao Meri Tamanna ",
        artist: "Javed Ali",
        file: "Aa Jao Meri Tamanna - Pritam.mp3",
        image: "Aa.jpg"
    },
    {
        title: "Raatein Guzaari",
        artist: "Aditya Rikhari",
        file: "Aditya Rikhari - Raatein Guzaari.mp3",
        image: "RJ.jpg"
    },
    {
        title: "Channa",
        artist: "Aditya Rikhari, Ravator",
        file: "Channa (Music Video) Aditya Rikhari X Ravator Deepesh Goyal.mp3",
        image: "Channa.jpg"
    },
    {
        title: "Dil To Pagal Hai",
        artist: "Udit Narayan, Lata Mangeshkar",
        file: "Dil To Pagal Hai.mp3",
        image: "Dil.jpg"
    },
    {
        title: "Pehli Pehli Baar Mohabbat Ki Hai",
        artist: "Kumar Sanu",
        file: "Pehli Pehli Baar Mohabbat Ki Hai.mp3",
        image: "PP.jpg"
    },
    {
        title: "Sadiyan",
        artist: "Abhijay Sharma",
        file: "Sadiyan Abhijay Sharma I-Popstar Vol.1 EP04 Amazon MX Player.mp3",
        image: "SA.jpg"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const albumImage = document.getElementById("album-image");
const progressBar = document.getElementById("progress-bar");

const volumeBar = document.getElementById("volume-bar");
const volumePercentage = document.getElementById("volume-percentage");

function loadSong(index) {
    const song = songs[index];

    songTitle.textContent = song.title;
    artistName.textContent = song.artist;

    albumImage.src = song.image;
    albumImage.alt = `Artwork for ${song.title}`;

    audio.src = song.file;
    audio.load();

    progressBar.value = 0;

    playButton.textContent = "▶";
    playButton.setAttribute("aria-label", "Play");
}

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸";
        playButton.setAttribute("aria-label", "Pause");
    } else {
        audio.pause();
        playButton.textContent = "▶";
        playButton.setAttribute("aria-label", "Play");
    }
});

previousButton.addEventListener("click", () => {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();

    playButton.textContent = "⏸";
    playButton.setAttribute("aria-label", "Pause");
});

nextButton.addEventListener("click", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

    playButton.textContent = "⏸";
    playButton.setAttribute("aria-label", "Pause");
});

audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        progressBar.value =
            (audio.currentTime / audio.duration) * 100;
    }
});

progressBar.addEventListener("input", () => {
    if (audio.duration) {
        audio.currentTime =
            (progressBar.value / 100) * audio.duration;
    }
});

audio.volume = 1;
volumeBar.value = 100;
volumePercentage.textContent = "100%";

volumeBar.addEventListener("input", () => {
    const volume = Number(volumeBar.value);

    audio.volume = volume / 100;
    volumePercentage.textContent = `${volume}%`;
});

audio.addEventListener("ended", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

    playButton.textContent = "⏸";
    playButton.setAttribute("aria-label", "Pause");
});

audio.addEventListener("pause", () => {
    if (!audio.ended) {
        playButton.textContent = "▶";
        playButton.setAttribute("aria-label", "Play");
    }
});

loadSong(currentSong);
