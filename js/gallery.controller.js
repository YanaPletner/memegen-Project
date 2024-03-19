"use strict"

let gElGallery

function renderGallery() {
    gElGallery = document.querySelector('.gallery-container')
    gElGallery.innerHTML = "<img src='meme-imgs/meme-imgs (square)/1.jpg' class='id-1.jpg' onclick='onImgSelect(this)'>"
    gElGallery.innerHTML += "<img src='meme-imgs/meme-imgs (square)/2.jpg' class='id-2.jpg' onclick='onImgSelect(this)'>"
}

function onImgSelect(elImg) {
    const imgId = elImg.classList.value

    setImg(imgId)
    renderMeme()
}

function onRandomImg() {
    const random = getRandomInt(1, 43)

    const elImg = new Image()
    elImg.src = `meme-imgs/meme-imgs (square)/${random}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        renderTxtLines()
    }
}