"use strict"
const MEME_KEY = 'memeDB'

var gMeme = {
    selectedImgId: 1,  //1-43
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'ADD TEXT',
            size: 30,
            font: 'Anton',
            color: 'white',
            pos: { x: 200, y: 200 },
            isDrag: false,
        },
        // {
        //     txt: 'I am a baby',
        //     size: 30,
        //     color: 'white',
        //     pos: { x: 100, y: 315 },
        //     isDrag: false,
        // }
    ]
}

function setImgId(imgId) {
    gMeme.selectedImgId = imgId
}

function getMeme() {
    return gMeme
}

function getTxtLines() {
    return gMeme.lines
}

function getSelectedTxtLineIdx() {
    return gMeme.selectedLineIdx
}

function setTxtLine(text) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.txt = text
}

function increaseTxtLineFontSize() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    // selectedLine.size += 2
    _setTxtLineSize(selectedLine.size + 2, gMeme.selectedLineIdx)
}

function decreaseTxtLineFontSize() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    // selectedLine.size -= 2
    _setTxtLineSize(selectedLine.size - 2, gMeme.selectedLineIdx)
}

function setTxtLineColor(color) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.color = color
}

function addTxtLine(text) {
    gMeme.lines.push({
        txt: text,
        size: 30,
        font: 'anton',
        color: 'white',
        pos: { x: 200, y: 200 },
        // pos: { x: 315, y: 30 },
        isDrag: false,
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchTxtLine() {
    if (gMeme.lines.length > 1) {
        gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
    }
}

function setTxtLinePos(x, y) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.pos = { x, y }
}

function setTxtLineWidth(width, idx) {
    const selectedLine = gMeme.lines[idx]
    selectedLine.width = width
}

function isTxtLineClicked(clickedPos) {
    const lines = gMeme.lines;
    let isClicked = false;

    lines.forEach(line => {
        const { pos, size, width } = line;
        const { x, y } = pos;

        const textLeftX = x - width / 2;
        const textRightX = x + width / 2;
        const textTopY = y - size / 2;
        const textBottomY = y + size / 2;

        if (
            clickedPos.x >= textLeftX &&
            clickedPos.x <= textRightX &&
            clickedPos.y >= textTopY &&
            clickedPos.y <= textBottomY
        ) {
            isClicked = true;
        }
    });

    return isClicked;
}

function setSelectedTxtLineIdx(idx) {
    gMeme.selectedLineIdx = idx
}

function setTtxLineFont(font) {
    const idx = gMeme.selectedLineIdx
    const selectedLine = gMeme.lines[idx]
    selectedLine.font = font
}

function getTxtLintFont(idx) {
    const selectedLine = gMeme.lines[idx]
    return selectedLine.font
}

function deleteTxt(idx) {
    gMeme.lines.splice(idx, 1)
}

function setSelectedImgId(imgId) {
    gMeme.selectedImgId = imgId
}

function saveMeme(val) {
    saveToStorage(MEME_KEY, val)
}

function _setTxtLineSize(size, idx) {
    const selectedLine = gMeme.lines[idx]
    selectedLine.size = size
}
