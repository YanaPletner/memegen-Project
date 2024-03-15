"use strict"

let gElGallery

function renderGallery() {
    gElGallery = document.querySelector('.gallery-container')
    gElGallery.innerHTML = "<img src='meme-imgs/meme-imgs (square)/1.jpg'></img>"
    gElGallery.innerHTML += "<img src='meme-imgs/meme-imgs (square)/2.jpg'>"
}