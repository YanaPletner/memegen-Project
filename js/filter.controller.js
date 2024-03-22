"use strict"

let gSmileImgsId = [7, 8, 9, 10, 13, 16, 24, 25, 31, 33, 35, 37, 40, 41]
let gBabyImgsId = [3, 5, 7, 9, 21, 22, 25, 31, 33]
let gCuteImgsId = [2, 3, 4, 5, 7, 9, 20, 21, 22, 23, 25, 34]
let gAnimalImgsId = [2, 3, 4, 20, 22, 23, 34]
let gFunnyImgsId = [10, 35, 41]
let gAngryImgsId = [1, 27, 32]
let gPresidentImgsId = [1, 10, 17, 19, 32, 35, 42]
let gDogImgsId = [2, 3, 20, 22]
let gCatImgsId = [4, 23]
let gManImgsId = [1, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 26, 27, 29, 30, 32, 35, 36, 37, 38, 39, 41, 42]
let gKissImgsId = [11, 36]
let gWomanImgsId = [28]
let gCartoonImgsId = [18, 43]
let gNatureImgsId = [5, 9, 20, 21, 25, 28]

function onFilter(value) {
    switch (value) {
        case 'all':
            gElGallery.innerHTML = ''
            renderGalleryImages(gMaxMemes)
            break

        case 'smile':
            renderOption(gSmileImgsId)
            break

        case 'baby':
            renderOption(gBabyImgsId)
            break

        case 'cute':
            renderOption(gCuteImgsId)
            break

        case 'animal':
            renderOption(gAnimalImgsId)
            break

        case 'funny':
            renderOption(gFunnyImgsId)
            break

        case 'angry':
            renderOption(gAngryImgsId)
            break

        case 'dog':
            renderOption(gDogImgsId)
            break

        case 'cat':
            renderOption(gCatImgsId)
            break

        case 'man':
            renderOption(gManImgsId)
            break

        case 'woman':
            renderOption(gWomanImgsId)
            break

        case 'kiss':
            renderOption(gKissImgsId)
            break

        case 'cartoon':
            renderOption(gCartoonImgsId)
            break

        case 'nature':
            renderOption(gNatureImgsId)
            break

        default:
            break
    }
    document.querySelector('#filterInput').value = ''
}

function renderOption(images) {
    const strHtml = images.map(id => {
        return `<img class='id-${id}' src='meme-imgs/${id}.jpg' onclick='onImgSelect(this)'></img>`
    })
    gElGallery.innerHTML = strHtml.join('')
}

