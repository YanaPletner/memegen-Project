"use strict"

var gMeme = {
    selectedImgId: 5,  //1-43
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Sometimes I eat Falafel',
            size: 30,
            color: 'white',
            pos: {},
        },
        {
            txt: 'I am a baby',
            size: 30,
            color: 'white',
            pos: {},
        }
    ]
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function getMeme() {
    return gMeme.selectedImgId
}

function getLinesTxtMap() {
    return gMeme.lines.map((line) => line.txt)
}

function getLine(idx) {
    return gMeme.lines[idx]
}

function setLinePos(idx, x, y) {
    gMeme.lines[idx].pos = { x, y }
}

// function getLinePos(idx) {  ///////?
//     return gMeme.lines[idx].pos
// }

function getSelectedLineIdx() {
    return gMeme.selectedLineIdx
}

function setLineTxt(text) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.txt = text
}

function increaseFontSize() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.size += 2
}

function decreaseFontSize() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.size -= 2
}

function setTxtColor(color) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.color = color
}

// function getTxtColor(idx) {
//     return gMeme.lines[idx].color
// }

// function getTxtSize(idx) {
//     return gMeme.lines[idx].size
// }



function addLine(text, x, y) {
    gMeme.lines.push({
        txt: text,
        size: 20,
        color: 'white',
        pos: { x, y }
    })

    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
    if (gMeme.lines.length > 1) {
        gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
    }
}


