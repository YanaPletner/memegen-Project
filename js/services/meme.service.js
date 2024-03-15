"use strict"

var gMeme = {
    selectedImgId: 5,  //1-43
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}


function getMeme() {
    // console.log(gMeme.lines[0].txt.length)
    return gMeme.selectedImgId
}

function getLineTxt() {
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}