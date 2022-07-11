console.log("welcome to my spotify");
//initaialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItems'));
mastersongname = document.getElementById('mastersongname');
let songs = [
    { songName: "Ami-Je-Tomar", filePath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Halki si Barsat", filePath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "har-har shambhu", filePath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "SRIVALLI", filePath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "HAR-HAR", filePath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "JANJI", filePath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "LET ME LOVE YOU", filePath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songName: "SALAM-E-ISHQ", filePath: "songs/8.mp3", coverpath: "covers/8.jpg" }
]
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
    //listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})
songitems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName
});
const makeallplays = ()=> {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('previous').addEventListener('click', () =>{
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click', () =>{
    if (songIndex > 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
   
})