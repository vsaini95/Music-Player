"using strict";
let songindex = 0;
let masterplay = document.getElementById("masterPlay");
let progress = document.getElementById("progress");
let audioEle = new Audio("music/0.mp3");
let imageCover = document.querySelector(".img-cover");
let songName = document.querySelector(".songName");
let artist = document.querySelector(".artist");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");

let songs = [
  {
    songName: "Radio",
    singer: "Lana Del Ray",
    filepath: "music/0.mp3",
    coverpath: "poster/0.jpg",
  },
  {
    songName: "Back to you",
    singer: "Salena Gomez",
    filepath: "music/1.mp3",
    coverpath: "poster/1.jpg",
  },
  {
    songName: "Sahiba",
    singer: "Diljit Dosanjh",
    filepath: "music/2.mp3",
    coverpath: "poster/2.jpg",
  },
  {
    songName: "Sang Rahiyo",
    singer: "Jasleen Royal",
    filepath: "music/3.mp3",
    coverpath: "poster/3.jpeg",
  },
  {
    songName: "People you Know",
    singer: "Salena Gomez",
    filepath: "music/4.mp3",
    coverpath: "poster/4.jpg",
  },
];

//handling events

masterplay.addEventListener("click", () => {
  if (audioEle.paused || audioEle.currentTime <= 0) {
    audioEle.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
  } else {
    audioEle.pause();
    masterplay.classList.add("fa-circle-play");
    masterplay.classList.remove("fa-circle-pause");
  }
});

audioEle.addEventListener("timeupdate", () => {
  progressvalue = parseInt((audioEle.currentTime / audioEle.duration) * 100);
  progress.value = progressvalue;
});

progress.addEventListener("change", () => {
  audioEle.currentTime = (progress.value * audioEle.duration) / 100;
});

const update = function (i) {
  audioEle.src = `music/${i}.mp3`;
  audioEle.currentTime = 0;
  audioEle.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");

  for (let j = 0; j < 5; j++) {
    if (j == i) {
      songName.textContent = songs[j].songName;
      artist.textContent = songs[j].singer;
      imageCover.src = songs[j].coverpath;
    }
  }
};

forward.addEventListener("click", () => {
  if (songindex >= 4) {
    songindex = 0;
  } else {
    songindex++;
  }
  update(songindex);
});

backward.addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex--;
  }
  update(songindex);
});

