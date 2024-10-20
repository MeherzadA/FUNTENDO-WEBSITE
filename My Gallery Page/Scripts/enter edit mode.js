// function callCanvasSetup(){

//     console.log("changing to done!")
//     let editBtnElement = document.querySelector('.edit-btn');
//     editBtnElement.innerHTML = 'Done!<i class="fa-solid fa-check done-checkmark-icon"></i>'

//     editBtnElement.addEventListener('click', handleDoneEditing)

//     setupCanvasArea(currentImgURL);
// }

// function setupCanvasArea(imgURL) {
//     if (isCanvasAreaSetup) {
//         console.log("canvas already setup, returning");
//         return;
//     }

//     currentImgEditing.classList.toggle('enlarge-img');
//     let a = currentImgEditing.closest('.img-item-container');
//     a.classList.add('display-none');

//     console.log("setting up canvas");

//     document.querySelector('.canvas').classList.toggle('opacity-one');
//     document.querySelector('.full-tool-menu').classList.toggle('opacity-one');
//     isCanvasAreaSetup = true;

//     // Create a new canvas element using fabric.js
//     canvas = new fabric.Canvas('canvas');

//     canvas.set()



//     // Load the background image using fabric.Image.fromURL
//     fabric.Image.fromURL(imgURL, (frameBackgroundImage) => {

//         console.log("test");
//         // Set the canvas width and height based on the image dimensions
//         if (frameBackgroundImage.width > 600) {
//             canvas.setWidth(600);
//         } else {
//             canvas.setWidth(frameBackgroundImage.width);
//         }

//         canvas.setHeight((frameBackgroundImage.height / frameBackgroundImage.width) * canvas.width);

//         // Set the loaded image as the background image
//         canvas.setBackgroundImage(frameBackgroundImage, canvas.renderAll.bind(canvas), {
//             scaleX: canvas.width / frameBackgroundImage.width,
//             scaleY: canvas.height / frameBackgroundImage.height
//         });
//     });

   

//     canvas.renderAll();
// }

// function setupCanvasArea(imgURL){

//     if(isCanvasAreaSetup){
//         console.log("canvas already setup, returning")
//         return
//     }

//     currentImgEditing.classList.toggle('enlarge-img');
//     let a = currentImgEditing.closest('.img-item-container');
//     a.classList.add('display-none');
    

//     console.log("setting up canvas");
    

//     document.querySelector('.canvas').classList.toggle('opacity-one')
//     document.querySelector('.full-tool-menu').classList.toggle('opacity-one');
//     isCanvasAreaSetup = true;

//     // create new canvas element using fabric.js
//     canvas = new fabric.Canvas('canvas');
    
    
//     const frameBackgroundImage = new Image();
//     frameBackgroundImage.src = imgURL;
//     canvas.set(frameBackgroundImage.src);

//     console.log(typeof(frameBackgroundImage.src));
//     console.log(frameBackgroundImage.src);

//     frameBackgroundImage.onload = () => {
//         if(frameBackgroundImage.width > 600){
//             canvas.setWidth(600); 
//         }
//         else{
//             canvas.setWidth(frameBackgroundImage.width); 
//         }
        
//         canvas.setHeight((frameBackgroundImage.height / frameBackgroundImage.width) * canvas.width);

    

//         canvas.setBackgroundImage(frameBackgroundImage.src, canvas.renderAll.bind(canvas), {
//             scaleX: canvas.width / frameBackgroundImage.width,
//             scaleY: canvas.height / frameBackgroundImage.height,
//         });
//     }
    
// }




// function bringImgForward(currentImg) {

//     let editBtnElement = document.querySelector('.edit-btn');
//     editBtnElement.innerHTML = 'Edit<i class="fa-solid fa-pen edit-pen-icon"></i>';

//     doneEditingDiv.classList.remove('opacity-one');

//     currentImgEditing = currentImg;

//     console.log("test");


//     currentImg.classList.toggle('enlarge-img');
//     let a = currentImg.closest('.img-item-container');

//     a.classList.toggle('enable-hover');
//     a.classList.toggle('img-item-container-style');
//     a.classList.toggle('enlarge-img');


//     let defaultToolSelection = '';

//     document.querySelector('.popup-content').innerHTML = `

//         <div class = "canvas-container">

//             <canvas class = "canvas" id = "canvas"></canvas>

//         </div>

//         <div class = "full-tool-menu">
//             <div class = "tool-selections-container">
                
//                 <div class = "tool-selections-subcontainer">

//                     <div class = "tool-selection-title">STAMPS</div>

//                     <div class = "tool-selection-options">
                        
//                     </div>


//                 </div>

//                 <div class = "drawing-tool-container">

                        
//                     <button class = "stamps-btn">
//                         <img style = "width: 60px;" src = "Icons/stamps icon.webp">Stamps
//                     </button>  

                    

//                     <button class = "items-btn">
//                         <img style = "width: 60px;" src = "Icons/items boomerang icon.webp">Items
//                     </button>


//                     <button class = "characters-btn">
//                         <img style = "width: 50px;" src = "Icons/characters pikachu icon.png">Characters
//                     </button>


//                 </div>
//             </div>


//         </div>` 


//     loadSelections(STAMPS, 'STAMPS');

//     document.querySelector('.stamps-btn').addEventListener('click', () => loadSelections(STAMPS, 'STAMPS'));
//     document.querySelector('.items-btn').addEventListener('click', () => loadSelections(ITEMS, 'ITEMS'));
//     document.querySelector('.characters-btn').addEventListener('click', () => loadSelections(CHARACTERS, 'CHARACTERS'))

//     currentImgURL = currentImg.src; 
//     console.log(currentImgURL);
//     console.log("clicked on img again to exit")
//     currentImgElement = currentImg;
//     isCanvasAreaSetup = false

//     document.querySelector('.popup-container').classList.toggle('show-popup');

//     document.body.classList.toggle('disable-scroll');

//     editBtnElement.removeEventListener('click', handleDoneEditing)

//     document.querySelector('.edit-btn').removeEventListener('click', callCanvasSetup);
//     document.querySelector('.edit-btn').addEventListener('click', callCanvasSetup);
// }


function callCanvasSetup() {
    console.log("changing to done!");
    let editBtnElement = document.querySelector('.edit-btn');
    editBtnElement.innerHTML = 'Done!<i class="fa-solid fa-check done-checkmark-icon"></i>';

    editBtnElement.addEventListener('click', handleDoneEditing);
    setupCanvasArea(currentImgURL);  // Passes the URL of the current image to the canvas setup function
}

function setupCanvasArea(imgURL) {
    if (isCanvasAreaSetup) {
        console.log("canvas already setup, returning");
        return;
    }

    currentImgEditing.classList.toggle('enlarge-img');
    let a = currentImgEditing.closest('.img-item-container');
    a.classList.add('display-none');

    console.log("setting up canvas");

    // Make the canvas and tool menu visible
    document.querySelector('.canvas').classList.toggle('opacity-one');
    document.querySelector('.full-tool-menu').classList.toggle('opacity-one');

    isCanvasAreaSetup = true;

    // Initialize the canvas object using Fabric.js
    canvas = new fabric.Canvas('canvas');

    // Load the background image
    const img = new Image();
    img.src = imgURL;  // The URL is passed in as a string
    console.log("loading image from URL:", imgURL);

    img.onload = () => {
        console.log("image loaded successfully");

        // Create a Fabric image object from the loaded image
        const fabricImage = new fabric.Image(img, {
            selectable: false,  // Make it non-selectable
            evented: false,  // Disable events
        });

        // Set the canvas dimensions based on the image width (max width of 600px)
        if (img.width > 600) {
            canvas.setWidth(600);
        } else {
            canvas.setWidth(img.width);
        }
        canvas.setHeight((img.height / img.width) * canvas.width);

        // Set the background image using the `set` method with scaling based on the canvas dimensions
        canvas.set("backgroundImage", fabricImage);
        fabricImage.scaleToWidth(canvas.width);  // Scale the image width to match the canvas width
        fabricImage.scaleToHeight(canvas.height);  // Scale the image height to match the canvas height

        canvas.renderAll();  // Render the canvas to show the changes
    };

    img.onerror = () => {
        console.error('Failed to load image');
    };
}

function bringImgForward(currentImg) {
    let editBtnElement = document.querySelector('.edit-btn');
    editBtnElement.innerHTML = 'Edit<i class="fa-solid fa-pen edit-pen-icon"></i>';

    doneEditingDiv.classList.remove('opacity-one');

    currentImgEditing = currentImg;

    currentImg.classList.toggle('enlarge-img');
    let a = currentImg.closest('.img-item-container');

    a.classList.toggle('enable-hover');
    a.classList.toggle('img-item-container-style');
    a.classList.toggle('enlarge-img');

    let defaultToolSelection = '';

    document.querySelector('.popup-content').innerHTML = `
        <div class="canvas-container">
            <canvas class="canvas" id="canvas"></canvas>
        </div>
        <div class="full-tool-menu">
            <div class="tool-selections-container">
                <div class="tool-selections-subcontainer">
                    <div class="tool-selection-title">STAMPS</div>
                    <div class="tool-selection-options"></div>
                </div>
                <div class="drawing-tool-container">
                    <button class="stamps-btn">
                        <img style="width: 60px;" src="Icons/stamps icon.webp">Stamps
                    </button>  
                    <button class="items-btn">
                        <img style="width: 60px;" src="Icons/items boomerang icon.webp">Items
                    </button>
                    <button class="characters-btn">
                        <img style="width: 50px;" src="Icons/characters pikachu icon.png">Characters
                    </button>
                </div>
            </div>
        </div>`;

    loadSelections(STAMPS, 'Stamps');

    // Add event listeners for the buttons
    document.querySelector('.stamps-btn').addEventListener('click', () => loadSelections(STAMPS, 'Stamps'));
    document.querySelector('.items-btn').addEventListener('click', () => loadSelections(ITEMS, 'Items'));
    document.querySelector('.characters-btn').addEventListener('click', () => loadSelections(CHARACTERS, 'Characters'));

    // Set the current image URL
    currentImgURL = currentImg.src;
    console.log(currentImgURL);

    currentImgElement = currentImg;
    isCanvasAreaSetup = false;

    // Show the popup
    document.querySelector('.popup-container').classList.toggle('show-popup');
    document.body.classList.toggle('disable-scroll');

    editBtnElement.removeEventListener('click', handleDoneEditing);
    document.querySelector('.edit-btn').removeEventListener('click', callCanvasSetup);
    document.querySelector('.edit-btn').addEventListener('click', callCanvasSetup);
}
