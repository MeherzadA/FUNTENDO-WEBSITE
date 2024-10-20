document.querySelector('.back-to-gallery-btn').addEventListener('click', handleGoBackToGallery)


    let doneEditingDiv = document.querySelector('.done-editing-container');

    function handleGoBackToGallery(){
        bringImgForward(currentImgEditing);
        displayGalleryOnLoad();
    }


    function handleDoneEditing(){

        console.log("called handle done editing!")

        canvas.discardActiveObject();
        canvas.renderAll();
       
        doneEditingDiv.classList.add('opacity-one');

        let editBtnElement = document.querySelector('.edit-btn');
        editBtnElement.removeEventListener('click', handleDoneEditing)

        document.querySelector('#cancel-done-btn').addEventListener('click', handleCancelDoneEditing);
        document.querySelector('#confirm-keep-editing-btn').addEventListener('click', handleConfirmKeepEditing);
        document.querySelector('#confirm-goto-gallery-btn').addEventListener('click', handleConfirmAndGoToGallery);
    }

    function handleConfirmAndGoToGallery(){
        if(isSaveImageToGallery()){
            handleSaveImageToGallery();
        }

        if(isDownloadImage()){
            handleDownloadImage();
        }

        handleGoBackToGallery();
    }

    function handleConfirmKeepEditing(){
        if(isSaveImageToGallery()){
            handleSaveImageToGallery();
            // add a banner saying if image was added to gallery
        }

        if(isDownloadImage()){
            handleDownloadImage();
        }

        handleCancelDoneEditing();
    }

    function isSaveImageToGallery(){
        return document.querySelector('#gallery-save-checkbox').checked
    }

    function handleSaveImageToGallery(){
        // reset checkbox to false
        document.querySelector('#gallery-save-checkbox').checked = false;

        let imgURL = canvas.toDataURL("image/png");
        imgUrlList.push(imgURL);

        localStorage.setItem("imgUrlList", JSON.stringify(imgUrlList));
        displayGalleryOnLoad();

    }

    function isDownloadImage(){
        return document.querySelector('#img-download-checkbox').checked
    }



    function handleCancelDoneEditing(){
        doneEditingDiv.classList.remove('opacity-one');
        document.querySelector('#gallery-save-checkbox').checked = false;
        document.querySelector('#img-download-checkbox').checked = false;
        document.querySelector('.edit-btn').click();
    }