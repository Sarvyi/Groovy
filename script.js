console.log("Welcome to Sarvy Groove");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songtits'));

let songs =[
    {songName: "Rumbing: Attack of Titan", filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songName: "Amalee FMAB",filepath:"songs/2.mp3",coverpath: "covers/2.jpg"},
    {songName: "Kira :Death Note",filepath:"songs/3.mp3",coverpath: "covers/3.jpg"},
    {songName: "Kira :Death Note",filepath:"songs/4.mp3",coverpath: "covers/4.jpg"},
    {songName: "GOT",filepath:"songs/5.mp3",coverpath: "covers/5.jpg"},
]
// songItems.forEach((element,i)=>{
//     console.log(element,i); 
//     element.getElementByTagName("img")[0].src = songs[i].coverpath; 
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
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = audioElement.duration * (progressbar.value/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})