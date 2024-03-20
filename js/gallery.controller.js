"use strict"

let gElGallery
let gCurrImgId

function renderGallery() {
    gElGallery = document.querySelector('.gallery-container')
    gElGallery.innerHTML = "<img src='meme-imgs/1.jpg' class='id-1.jpg' onclick='onImgSelect(this)'>"
    gElGallery.innerHTML += "<img src='meme-imgs/2.jpg' class='id-2.jpg' onclick='onImgSelect(this)'>"
}

function onImgSelect(elImg) {
    const imgId = elImg.classList.value

    setImg(imgId)
    renderMeme()
}

function onRandomImg() {
    const random = getRandomInt(1, 43)

    const elImg = new Image()
    elImg.src = `meme-imgs/${random}.jpg`

    const currImgId = random

    elImg.onload = () => {
        gElCanvas.width = elImg.width / 2
        gElCanvas.height = elImg.height / 2

        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        setSelectedImgId(currImgId)
        renderTxtLines()
    }
    onOpenMemeEditor()
}


function onOpenMemeEditor() {
    const elModal = document.querySelector('.meme-editor')
    elModal.style.display = 'block'
}

function onCloseMemeEditor() {
    const elModal = document.querySelector('.meme-editor')
    elModal.style.display = 'none'
}