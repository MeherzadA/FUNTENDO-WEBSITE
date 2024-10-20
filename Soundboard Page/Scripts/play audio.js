let audio = null;

function playAudio(src){

    if(audio){
        audio.pause();
        audio.currentTime = 0;
    }

    audio = new Audio();
    audio.src = src;
    console.log(src)
    audio.play();
}


function getRandomAudio(objectIndex, length){
    max = length - 0;

    const randIndex = parseInt((Math.random() * max));

    const path = `Character SFX/${allCharacters[objectIndex].soundEffects[randIndex]}`
    return path;
}
