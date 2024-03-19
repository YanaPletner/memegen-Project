"use strict"

var gMeme = {
    selectedImgId: 5,  //1-43
    selectedLineIdx: 1,
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
        size: 20,
        color: 'white',
        pos: { x: 315, y: 30 },
        isDrag: false,
        isSelected: false,
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



// function setTxtLineDrag(isDrag) {
//     const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
//     selectedLine.isDrag = isDrag
// }

// function moveTxtLine(dx, dy) {
//     const selectedLine = gMeme.lines[gMeme.selectedLineIdx]

//     selectedLine.pos.x += dx
//     selectedLine.pos.y += dy
// }


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

function _setTxtLineSize(size, idx) {
    const selectedLine = gMeme.lines[idx]
    selectedLine.size = size
}

// function alignTxtLine(idx, action) {
//     const line = gMeme.lines[idx]

//     switch (action) {
//         case 'left':
//             line.pos.x = gElCanvas.width
//             break
//         case 'center':
//             line.pos.x = gElCanvas.width / 2
//             break
//         case 'right':
//             line.pos.x = gElCanvas.width - line.width / 2 - 20
//             break
//         default:
//             break
//     }
// }

// function setTtxLineFont(action, fontFamily) {
//     const line = gMeme.lines[gMeme.selectedLineIdx]
//     switch (action) {
//         case 'family':
//             line.fontFamily = fontFamily
//             break;
//     }
// }