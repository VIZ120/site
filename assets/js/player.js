function playmusic(name) {
    var nameA = name;
    var myAudio = document.getElementById(nameA);
    return myAudio.paused ? myAudio.play() : myAudio.pause();
}