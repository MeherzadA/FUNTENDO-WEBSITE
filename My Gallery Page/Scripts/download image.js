document.querySelector('#canvasDownload').addEventListener('click', () => {
    console.log("downloading image!");
    document.getElementById("canvasDownload").href = currentImgURL;
});

function download(){
    console.log("done");
    const pngDataUrl = canvas.toDataURL("image/png");
    console.log(pngDataUrl);
    document.getElementById("canvasDownload").href = pngDataUrl;
}

function handleDownloadImage(){ 
    // reset checkbox to false
    document.querySelector('#img-download-checkbox').checked = false;

    document.querySelector('#canvasDownload').click();
}


