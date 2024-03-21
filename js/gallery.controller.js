"use strict"

let gElGallery
let gMaxMemes = 43

function renderGallery() {
    gElGallery = document.querySelector('.gallery-container')
    gElGallery.innerHTML = ""
    for (let i = 1; i < gMaxMemes; i++) {
        gElGallery.innerHTML += `<img class='id-${i}' src='meme-imgs/${i}.jpg' onclick='onImgSelect(this)'></img>`
    }
}

function onImgSelect(elImg) {
    var classAttributeValue = elImg.getAttribute('class')
    var imgId = classAttributeValue.match(/\d+/)[0]
    setImgId(imgId)

    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    renderMeme()
    onOpenMemeEditor()
}

function onRandomImg() {
    const random = getRandomInt(1, 43)

    // const elImg = new Image()
    // elImg.src = `meme-imgs/${random}.jpg`

    const currImgId = random

    // elImg.onload = () => {
    //     gElCanvas.width = elImg.width * 3 / 5
    //     gElCanvas.height = elImg.height * 3 / 5

    // gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    setImgId(currImgId)

    // }
    onOpenMemeEditor()

    renderMeme()
    renderTxtLines()
}


function onOpenMemeEditor() {
    const elModal = document.querySelector('.meme-editor')
    elModal.style.display = 'block'
}

function onCloseMemeEditor() {
    const elModal = document.querySelector('.meme-editor')
    elModal.style.display = 'none'
}