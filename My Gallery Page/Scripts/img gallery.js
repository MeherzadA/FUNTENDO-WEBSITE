

let imgUrlList = JSON.parse(localStorage.getItem('imgUrlList'));
    
if(!imgUrlList){
    imgUrlList = [];
    displayGalleryOnLoad();
}

else{
    displayGalleryOnLoad();
}

document.querySelector('#file-input').addEventListener('change', function() {

    console.log("I have been called!!")
    const reader = new FileReader();

    reader.addEventListener('load', () => {

        imgUrl = reader.result;
        imgUrlList.push(imgUrl);

        localStorage.setItem("imgUrlList", JSON.stringify(imgUrlList));
        displayGalleryOnLoad();
    });

    reader.readAsDataURL(this.files[0]);

    hideDefaultAddImgContainer = true;
    

    
});


function displayGalleryOnLoad() {
    let HTMLToAdd = '';
    imgUrlList.forEach((imgUrl) => {

        HTMLToAdd += `
        <div class = "img-item-container img-item-container-style enable-hover">
            <img class="img-item" src="${imgUrl}" >
            <button class = "delete-img-btn"><i class="fa-solid fa-trash delete-img-trash-icon"></i></button>

        </div>
        `;
    });


    HTMLToAdd += `
    <div class = "add-img-label-container"> 
        <img class = "add-photo-icon" src = "Icons/add photo icon.png">
        <label class="add-img-label " for="file-input">Add Image</label>
        
    </div> `



    document.querySelector('.img-grid').innerHTML = HTMLToAdd;

    // make it so that if I click anywhere on the add image div, the label will be clicked and user can add their image from their file
    // Attach the event listener only once for opening the file input
    const addImgLabelContainer = document.querySelector('.add-img-label-container');
    addImgLabelContainer.removeEventListener('click', replaceName);
    addImgLabelContainer.addEventListener('click', replaceName);
        // document.querySelector('.add-img-label-container').addEventListener('click', replaceName);

    document.querySelectorAll('.delete-img-btn').forEach((deleteImgBtn, index) => {
        deleteImgBtn.addEventListener('click', () => handleImgDelete(index));
    });

    document.querySelectorAll('.img-item').forEach((imgItem, index) => {

        //remove this after 
        // if(index === 0){
        //     bringImgForward(imgItem);
        //     document.querySelector('.edit-btn').click();
        //     document.querySelector('.edit-btn').click();
        // }


        imgItem.addEventListener('click', () => bringImgForward(imgItem));
    });
}

function replaceName(event){
    event.stopPropagation();
    document.querySelector('#file-input').click();
}


function handleImgDelete(index){
    imgUrlList.splice(index, 1);
    localStorage.setItem("imgUrlList", JSON.stringify(imgUrlList));
    displayGalleryOnLoad();
}