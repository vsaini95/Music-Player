"using strict";
let songindex = 0;
let masterplay = document.getElementById("masterPlay");
let progress = document.getElementById("progress");
let audioEle = new Audio("music/0.mp3");
let imageCover = document.querySelector(".image-cover");
let songName = document.querySelector(".songName");
let artist = document.querySelector(".artist");

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
    singer: "Lana Del Ray",
    filepath: "music/2.mp3",
    coverpath: "poster/2.jpg",
  },
  {
    songName: "Sang Rahiyo",
    singer: "Lana Del Ray",
    filepath: "music/3.mp3",
    coverpath: "poster/3.jpg",
  },
  {
    songName: "wolves",
    singer: "Salena Gomez",
    filepath: "music/4.mp3",
    coverpath: "poster/4.jpg",
  },
];

songs.forEach((ele) => {});

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
