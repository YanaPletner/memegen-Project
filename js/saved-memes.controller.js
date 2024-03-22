"use strict"

function onOpenSaved() {
    const elModal = document.querySelector('.saved-memes-container')
    elModal.style.display = 'block'
    renderSavedMemes()
}

function onCloseSaved() {
    const elModal = document.querySelector('.saved-memes-container')
    elModal.style.display = 'none'
}

function onSaveMeme() {
    const id = getSelectedImgId()
    console.log(id)
    const data = gElCanvas.toDataURL(`${id}/jpg`)
    saveMeme(data)
}

function renderSavedMemes() {
    if (!gMemes.length || !gMemes) return
    const elSavedMemes = document.querySelector('.saved-memes')
    elSavedMemes.innerHTML = ""
    for (let i = 1; i <= gMemes.length; i++) {
        elSavedMemes.innerHTML += `<img class='id-${i}' src='meme-imgs/${i}.jpg' onclick='onImgSelect(this);onCloseSaved()'></img>`
    }
}