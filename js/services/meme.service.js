"use strict"

var gMeme = {
    selectedImgId: 5,  //1-43
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 30,
            color: 'white'
        },
        {
            txt: 'I am a baby',
            size: 30,
            color: 'white'
        }
    ]
}


function getMeme() {
    return gMeme.selectedImgId
}

function getLineTxt() {
    // return gMeme.lines[gMeme.selectedLineIdx].txt
    return gMeme.lines.map((line) => line.txt)
    // return [...lines]
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}


function setImg(imgId) {
    gMeme.selectedImgId = imgId
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

function getTxtColor(idx) {
    return gMeme.lines[idx].color
}

function getTxtSize(idx) {
    return gMeme.lines[idx].size
}

function getSelectedLineIdx() {
    return gMeme.selectedLineIdx
}

function addLine(text) {
    gMeme.lines.push({
        txt: text,
        size: 20,
        color: 'white'
    })

    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
    if (gMeme.lines.length > 1) {
        gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
    }
}
