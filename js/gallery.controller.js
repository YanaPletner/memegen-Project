"use strict"

let gElGallery
let gMaxMemes = 43

function renderGallery() {
    gElGallery = document.querySelector('.gallery-container')
    renderGalleryImages(gMaxMemes)
}

function renderGalleryImages(maxNum) {
    for (let i = 1; i <= maxNum; i++) {
        gElGallery.innerHTML += `<img class='id-${i}' src='meme-imgs/${i}.jpg' onclick='onImgSelect(this)'></img>`
    }
}

function onImgSelect(elImg) {
    const imgId = getElIdNumber(elImg)
    setSelectedImgId(imgId)
    renderMeme()
    onOpenMemeEditor()
}

function getElIdNumber(elImg) {
    var classAttributeValue = elImg.getAttribute('class')
    var imgId = classAttributeValue.match(/\d+/)[0]

    if (!imgId) imgId = gMaxMemes++
    return imgId
}

function onRandomImg() {
    const random = getRandomInt(1, 43)
    const currImgId = random
    console.log(currImgId)
    setSelctedImgId(currImgId)
    onOpenMemeEditor()
    renderMeme()
}
