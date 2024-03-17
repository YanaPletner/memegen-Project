"use strict"

var gMeme = {
    selectedImgId: 5,  //1-43
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Sometimes I eat Falafel',
            size: 30,
            color: 'white',
            pos: { x: 200, y: 200 },
            isDrag: false,
        },
        {
            txt: 'I am a baby',
            size: 30,
            color: 'white',
            pos: { x: 100, y: 315 },
            isDrag: false,
        }
    ]
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function getMeme() {
    return gMeme.selectedImgId
}

function getTxtLines() {
    return gMeme.lines
}

function getSelectedTxtLineIdx() {
    return gMeme.selectedLineIdx
}

function setSelectedTxtLineIdx(idx) {
    gMeme.selectedLineIdx = idx
}

function setTxtLine(text) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.txt = text
}

function getSelectedTxtLine() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    return selectedLine.txt
}

function increaseTxtLineFontSize() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.size += 2
}

function decreaseTxtLineFontSize() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.size -= 2
}

function setTxtLineColor(color) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.color = color
}

function addTxtLine(text) {
    gMeme.lines.push({
        txt: text,
        size: 20,
        color: 'white',
        isDrag: false,
        pos: { x: 315, y: 30 },
    })

    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchTxtLine() {
    if (gMeme.lines.length > 1) {
        gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
    }
}

function setTxtLinePos(x, y) { //*************//
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.pos = { x, y }
}

function getTxtLinePos() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    return selectedLine.pos
}

function setTxtLineWidth(width) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.width = width
}

function getTxtLineWidth() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    return selectedLine.width
}

function setTxtLineHeight(height) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.height = height
}

function getTxtLineHeight() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    return selectedLine.height
}


function isTxtLineClicked(clickedPos) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const { height, width, pos } = selectedLine
    const { x, y } = pos//selectedLine.pos

    const distanceX = Math.sqrt((x - clickedPos.x) ** 2)
    const distanceY = Math.sqrt((y - clickedPos.y) ** 2)

    return distanceY <= height && distanceX <= width
}

function setTxtLineDrag(isDrag) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.isDrag = isDrag
}

function moveTxtLine(dx, dy) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]

    selectedLine.pos.x += dx
    selectedLine.pos.y += dy
}
