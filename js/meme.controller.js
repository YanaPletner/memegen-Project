"use strict"

// let gElCanvas
// let gCtx

// function onInit() {
//     gElCanvas = document.querySelector('canvas')
//     gCtx = gElCanvas.getContext('2d')

//     renderMeme()
// }

function renderMeme() {
    const elImg = new Image()
    elImg.src = `meme-imgs/meme-imgs (square)/${getMeme()}.jpg`

    //Render an img on canvas
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        // Render text on top of the img
        gCtx.fillStyle = 'white';
        gCtx.font = '36px Arial';
        gCtx.textAlign = 'center';
        gCtx.fillText(getLineTxt(), gElCanvas.width / 2, gElCanvas.height / 2);
    }
}

function onTxtInput(el, text) {
    setLineTxt(text)
    renderMeme()
}