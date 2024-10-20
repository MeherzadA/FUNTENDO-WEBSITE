function displayMoreInfo(objectIndex){

    let {characterName, characterDescription, characterSubheading, fullImg} = allCharacters[objectIndex]

    console.log("You clicked " + characterName.toUpperCase())

    // blur the soundboard grid in background and disable all pointer events so user cant keep clicking on it
    document.querySelector('.all-characters-grid').classList.add('grid-blurred');
    // document.querySelector('.all-characters-grid').style.pointerEvents = 'none';

    
    
    let HTMLToAdd = "";

    HTMLToAdd += `
    <div class = "more-info-subcontainer">


        <button class = "js-back-btn back-btn">
            <img class = "arrow-btn-img" src = "Icons/left arrow.png">       
        </button>


        <div class = "character-info-container">
            <div class = "character-name">${characterName.toUpperCase()}</div>
            <div class = "character-description">${characterDescription}</div>
            <div class = "character-subheading">${characterSubheading}</div>
        </div>

        <div class = "full-character-img-container">
            <img class = "full-character-img"src = "Full Character Images/${fullImg}">
        </div>


        <button class = "js-next-btn next-btn">
            <img class = "arrow-btn-img" src = "Icons/right arrow.png">    
        </button>


    </div>
    `




    
    

    document.querySelector('.more-info-container').classList.add("is-visible");
    
    document.querySelector('.js-more-info-container').innerHTML = HTMLToAdd;
    document.querySelector('body').style.overflow = 'hidden';

    document.querySelector('.subheading').classList.add("hide-visibility");

    const numCharacters = allCharacters.length;




    document.addEventListener('keydown', (event) => {
        if(event.key === 'Escape'){
            handleClickOffMoreInfo();
        }
    })

    document.addEventListener('click', (event)=> {
        if(clickedOutsidePopup(event)){
            handleClickOffMoreInfo();
        }
    });


    function clickedOutsidePopup(event){
        console.log(event.target)
        const isClickedOnMoreInfoDiv = event.target.closest('.more-info-subcontainer');
        const isClickedOnMoreInfoBtn = event.target.closest('.more-info-btn');

        return isClickedOnMoreInfoDiv === null && isClickedOnMoreInfoBtn === null;
    }

    



    function handleClickOffMoreInfo(){
            console.log("Clicked outside popup");
            document.querySelector('.more-info-container').classList.remove("is-visible");
            document.querySelector('.all-characters-grid').classList.remove('grid-blurred');
            document.querySelector('body').style.overflow = 'visible';
            document.querySelector('.subheading').classList.remove("hide-visibility");
    }

    const backButtonElement = document.querySelector('.js-back-btn');
    const nextButtonElement = document.querySelector('.js-next-btn');

    backButtonElement.disabled = objectIndex === 0;
    if(backButtonElement.disabled){
        document.querySelector('.js-back-btn').style.opacity = 0.5;
    }

    nextButtonElement.disabled = objectIndex === numCharacters-1;
    if(nextButtonElement.disabled){
        document.querySelector('.js-next-btn').style.opacity = 0.5;
    }

    let isScrolling = false;


    function handleKeyDown(event) {

        if (isScrolling || event.repeat) {
            return;
        }

        if (event.key === 'ArrowRight' && !nextButtonElement.disabled) {
            isScrolling = true;
            scrollRight(objectIndex);
        } else if (event.key === 'ArrowLeft' && !backButtonElement.disabled) {
            isScrolling = true;
            scrollLeft(objectIndex);
        }
    }

    document.body.removeEventListener('keydown', handleKeyDown);
    document.body.addEventListener('keydown', (event) => handleKeyDown(event));



    
    document.querySelector('.js-next-btn').addEventListener('click', () => scrollRight(objectIndex));
    document.querySelector('.js-back-btn').addEventListener('click', () => scrollLeft(objectIndex));


    // helper functions for going to next character slide
    function scrollRight(objectIndex){

        document.querySelector('.more-info-container').style.transition = 'transform 0.45s';
        document.querySelector('.is-visible').style.transform = `translate(100%, 450px)`;



        setTimeout(() =>{
            displayMoreInfo(objectIndex+1);
            document.querySelector('.is-visible').style.transform = 'translate(0, 450px)';

        }, 450);
    }


    function scrollLeft(objectIndex){
        document.querySelector('.more-info-container').style.transition = 'transform 0.45s';
        document.querySelector('.is-visible').style.transform = 'translate(-100%, 450px)';


        setTimeout(() =>{
            displayMoreInfo(objectIndex-1);
            document.querySelector('.is-visible').style.transform = 'translate(0, 450px)'

        }, 450);
    }
  
    
}