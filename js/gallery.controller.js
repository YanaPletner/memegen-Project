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