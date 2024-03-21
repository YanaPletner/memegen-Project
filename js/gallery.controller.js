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
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

    const imgId = getElIdNumber(elImg)
    setImgId(imgId)

    onOpenMemeEditor()
    renderMeme()
}

function getElIdNumber(elImg) {
    var classAttributeValue = elImg.getAttribute('class')
    var imgId = classAttributeValue.match(/\d+/)[0]
    return imgId
}

function onRandomImg() {
    const random = getRandomInt(1, 43)
    const currImgId = random

    setImgId(currImgId)
    onOpenMemeEditor()
    renderMeme()
}


function onOpenMemeEditor() {
    const elModal = document.querySelector('.meme-editor')
    elModal.style.display = 'block'
}

function onCloseMemeEditor() {
    const elModal = document.querySelector('.meme-editor')
    elModal.style.display = 'none'
}