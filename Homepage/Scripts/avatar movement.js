
function handlePipeReturn(){
    console.log("the cvurrent scroll is " + window.scrollY);
    if(window.scrollY != 0 && canReturn){
        usingPipe = false;
        console.log("can!")
        returningAvatarElement = document.querySelector('.my-avatar.can-return');
        avatarElement.classList.remove('out-pipe');

        returningAvatarElement.addEventListener('click', () => {
            
            console.log("the cvurrent scroll is " + window.scrollY);
            if(window.scrollY != 0){
                console.log("returningggg");
      
                avatarElement.classList.add('into-pipe');


            setTimeout(() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }, 500);

                setTimeout(() => {
                    avatarElement.classList.remove('into-pipe');
                    
                    avatarElement.classList.remove('can-return');
                    canReturn = false;

                    
                    

                }, 1850);
            }
        });
        
    }
}

avatarElement = document.querySelector('.my-avatar');
usingPipe = false;
canReturn = false;

avatarElement.addEventListener('click', () => {
    avatarElement.classList.remove('out-pipe');

    console.log("going forward to end pipe!");
    usingPipe = true;

    avatarElement.classList.add('into-pipe');
    

    setTimeout(() => {
        endElement = document.getElementById('end-section-id');
        endElement.scrollIntoView({ behavior: 'smooth' });
    }, 500);

    

    setTimeout(() => {
        avatarElement.classList.remove('into-pipe');
        avatarElement.classList.add('out-pipe');
        avatarElement.classList.add('can-return');
        canReturn = true;
        handlePipeReturn();
        
    
    }, 1850);

    
    
});



            







