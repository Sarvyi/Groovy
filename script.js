console.log("Welcome to Sarvy Groove");
let songIndex = 0;
let audioElement = new Audio('songs/rumbing.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let songItems = Array.from(document.getElementsByClassName('songtits'));

let songs =[
    {songName: "Rumbing: Attack of Titan",coverpath: "rumbing.jpg", filepath: "songs/rumbing.mp3"},
    {songName: "Amalee FMAB",coverpath: "rumbing.jpg",filepath:"songs/amalee.mp3"},
    {songName: "Kira :Death Note",coverpath: "rumbing.jpg",filepath:"songs/L2.mp3"},
    {songName: "Loki TVA",coverpath: "rumbing.jpg",filepath:"songs/TVA.mp3"},
    {songName: "GOT",coverpath: "rumbing.jpg",filepath:"songs/GOT.mp3"},
]
// songs.forEach((element,i)=>{
//     console.log(element,i);
//     // element.getElementByTagName("img")[0] = src.song[i].coverpath; 
//     element.getElementByClassName("songtits")[0].innerText = songs[i].songName;
// })
document.body.onkeyup = function(e) {
    if (e.code == "Space"){
        masterPlay.click();
    }
}
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0 ) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = "1";
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = audioElement.duration * (progressbar.value/100);
})