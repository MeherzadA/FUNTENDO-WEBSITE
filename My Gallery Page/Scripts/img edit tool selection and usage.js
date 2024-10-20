

let prev = null;
let twoSelected = false;

function loadSelections(toolName, name){
    console.log("called")
    document.querySelector('.tool-selection-title').textContent = name;
    let toolOptionsHTMLToAdd = '';
    
    toolName.forEach((toolObject, index) => {
        const toolWidth = toolObject.size;
        const toolImg = toolObject.img;

        toolOptionsHTMLToAdd += `
        <button class = "${name} ${index} tool-selection-options-btn" id = "${toolImg}">
            <img style = "width: ${toolWidth}px" src = "Canvas Tools/${name}/${toolImg}">
            
        </button>`;
        

        
        
    });

    const toolSelectionElement = document.querySelector('.tool-selection-options')

    toolSelectionElement.innerHTML = toolOptionsHTMLToAdd;

    toolSelectionElement.removeEventListener('click', handleToolSelection)
    toolSelectionElement.addEventListener('click', handleToolSelection)


}





function handleToolSelection(){
    const clickedButton = event.target.closest('button'); // Find the closest button element that is a parent or itself (closest doesn't check for children)

    if(prev === null){
        prev = clickedButton;
    }
    else{
        twoSelected = true;
    }
    
    clickedButton.classList.add('one-px-solid-red');

    if(twoSelected){
        prev.classList.remove('one-px-solid-red')
        prev = clickedButton;
    }

    twoSelected = true;

    const toolImgID = clickedButton.id; // Get the class name of the button
    const toolCategory = clickedButton.classList[0];
    const toolIndex = clickedButton.classList[1];

    console.log(`Clicked ${toolImgID} id`);
    
    console.log(`This is a ${toolCategory} class`);
    console.log(`This is from index ${toolIndex} in that category`);

    canvas.defaultCursor = `url('Cursor Images/${toolImgID}'), auto`;

    if(toolCategory === 'STAMPS' || toolCategory === 'ITEMS' || toolCategory === 'CHARACTERS'){
        setCurrentStamp(toolIndex, toolImgID, toolCategory)
    }

}

function removeAllEventListeners(){
    removeStampEventListeners();
    // removeDrawEventListeners();
}

function removeStampEventListeners(){
    canvas.off('mouse:down', handleStampTool);
}

function setCurrentStamp(stampIndex, stampSrc, toolCategory){
    const stampImage = new Image();
    stampImage.src = `Canvas Tools/${toolCategory}/${stampSrc}`;
    currentStamp = stampImage;

    currentStamp.opacity=  '0.5';

    currentStampIndex = stampIndex;
    currentToolCategory = toolCategory;
    removeAllEventListeners();
    canvas.on('mouse:down', handleStampTool);
    console.log("did smth");
}

function handleStampTool(event){
    console.log("handling stamp tool");


    window.addEventListener('keydown', (event) => {
        if(event.key === 'Delete' || event.key === 'Backspace'){
            canvas.remove(canvas.getActiveObject());
            canvas.renderAll();
        }

        else if(event.key === 'Escape'){
            canvas.discardActiveObject();
            canvas.renderAll();
        }
    });

    let isStampSelected = canvas.getActiveObject();


    if (!currentStamp || isStampSelected){
        console.log("A stamp is selected, don't place another one!");
        return;
    }
    
    let toolList;

    console.log(currentStampIndex);
    if(currentToolCategory === 'STAMPS'){
        toolList = STAMPS;
    }else if(currentToolCategory === 'ITEMS'){
        toolList  = ITEMS;
    }else if(currentToolCategory === 'CHARACTERS'){
        toolList  = CHARACTERS;
    }
    let defaultStampSize = toolList[currentStampIndex].size;

    console.log(defaultStampSize);

    const canvasPosition = canvas.getElement().getBoundingClientRect();

    const stampX = (event.pointer.x - defaultStampSize/10)+defaultStampSize/10;
    const stampY = (event.pointer.y - defaultStampSize/5)+defaultStampSize/5;

    console.log(currentStamp.src);


// Create a new Image object manually
    const imgElement = new Image();
    imgElement.src = currentStamp.src;  // Set the image source

    // Set up the image load event
    imgElement.onload = function() {
        console.log("Image loaded successfully:", currentStamp.src);
        
        // Create a new fabric.Image using the loaded HTML image element
        const fabricImage = new fabric.Image(imgElement, {
            left: stampX+2,
            top: stampY+2,  
            selectable: true,  
            evented: true,     
        });
        
        // Scale the image to a specific width
        fabricImage.scaleToWidth(defaultStampSize);
        
        // Add the image to the canvas
        canvas.add(fabricImage);
        
        // Ensure the canvas updates and renders the new image
        canvas.renderAll();

        console.log("Image placed at X:", stampX, "Y:", stampY);
    };


    imgElement.onerror = function() {
        console.error("Failed to load image from URL:", currentStamp.src);
    };

    


}
