windowHeight = window.innerHeight;

document.body.style.paddingBottom = '5250px'; // default
document.querySelector('.middle-section').style.marginTop = `${windowHeight * 2.63}px`; // default
document.querySelector('.end-section').style.marginTop = `${windowHeight * 4.5}px`; // default


currBrowser = whichBrowser();
if(currBrowser === 'Edge' || currBrowser === 'Firefox'){
    
    if(windowHeight >= 950){
        document.querySelector('.end-section').style.marginTop = `${windowHeight * 4.45}px`; 
        document.body.style.paddingBottom = '5450px';
    }
    else if(windowHeight >= 650){
        console.log("ermer");

        document.querySelector('.end-section').style.marginTop = `${windowHeight * 4.65}px`; 
        document.body.style.paddingBottom = '4650px';
        // document.querySelector('.end-section').style.marginTop = '2550px';
    }
    
}
else{
    
    console.log("not edge, not fox");
    console.log(windowHeight);

    


    if(windowHeight >= 950){
        console.log("here");
        console.log(windowHeight);
        document.querySelector('.end-section').style.marginTop = `${4300}px`;
        // document.querySelector('.end-section').style.marginTop = `${windowHeight * 4.35}px`;
        document.body.style.paddingBottom = '5180px';
        // document.querySelector('.end-section').style.marginTop = '4250px';
    }
    else if(windowHeight >= 650){
        console.log("erm");
        // document.querySelector('.end-section').style.marginTop = `${windowHeight * 4.6}px`;
        document.body.style.paddingBottom = '3980px';
        // document.querySelector('.end-section').style.marginTop = '2550px';
    }
}
