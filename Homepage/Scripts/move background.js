window.addEventListener('scroll', function() {   
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);

    backgroundContainer = document.querySelector('.background-container');

    backgroundContainer.style.backgroundPosition = `${-window.pageYOffset}px`


    if(!canReturn && scrollPosition >=1 && avatarElement.classList.contains('out-pipe')){
        avatarElement.style.display = 'none';
    }

    else if(scrollPosition >=1 && !usingPipe){
        avatarElement.style.display = 'none';
    }
    else if(canReturn && scrollPosition > 0 && scrollPosition <= 4028){
        avatarElement.style.display = 'none';
        
    }
    else if(canReturn && scrollPosition == 0){
        avatarElement.style.display = 'block';
        canReturn = false;
    }

    else if(!canReturn && scrollPosition >=1 && !usingPipe){
        avatarElement.style.display = 'none';
    }

    else{
        avatarElement.style.display = 'block';
        
    }
});