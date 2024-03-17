"use strict"

function renderMeme() {
    const elImg = new Image()
    elImg.src = `meme-imgs/meme-imgs (square)/${getMeme()}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        renderTxtLines()
    }
}

function renderTxtLines() {
    const lines = getTxtLines()


    lines.forEach((line, idx) => {
        const { txt, size, color, pos } = line
        const { x, y } = pos

        gCtx.fillStyle = color
        // gCtx.strokeStyle = 'black'

        gCtx.font = `${size}px Arial`
        gCtx.textAlign = 'center'

        // const x = gElCanvas.width / 2
        // const y = gElCanvas.height / 2

        gCtx.fillText(txt, x, y)
        // gCtx.strokeText(line, x, y)

        const textWidth = gCtx.measureText(line.txt).width
        const textHeight = line.size

        setTxtLineWidth(textWidth)
        setTxtLineHeight(textHeight)

        renderSelectedTxtLineFrame(idx)

    })

}


function renderSelectedTxtLineFrame(idx) {
    const selectedLineIdx = getSelectedTxtLineIdx()

    if (idx === selectedLineIdx) {
        const textWidth = getTxtLineWidth()
        const textHeight = getTxtLineHeight()
        const { x, y } = getTxtLinePos()

        const frameX = x - textWidth / 2 - 10
        const frameY = y - textHeight / 2 - 20
        const frameWidth = textWidth + 25
        const frameHeight = textHeight + 20

        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 2
        gCtx.strokeRect(frameX, frameY, frameWidth, frameHeight)
    }

}

function renderTxtLineInInput() {
    document.getElementById('text').value = getSelectedTxtLine()
}

function onTxtLineInput(text) {
    setTxtLine(text)
    renderMeme()
}

function onIncreaseTxtLineFontSize() {
    increaseTxtLineFontSize()
    renderMeme()
}

function onDecreaseTxtLineFontSize() {
    decreaseTxtLineFontSize()
    renderMeme()
}

function onColorPick(color) {
    setTxtLineColor(color)
    renderMeme()
}

function onAddLine(ev) {
    let newText = document.getElementById('text').value
    newText = 'ADD TEXT'

    addTxtLine(newText)
    renderMeme()
    renderTxtLineInInput()
}

function onSwitchTxtLine() {
    switchTxtLine()
    renderMeme()
    renderTxtLineInInput()
}

function onDownloadCanvas(elLink) {
    elLink.download = 'my-img'

    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}

// function onCanvasClick(ev) {
//     gStartPos = getEvPos(ev)

//     const lines = getTxtLines()
//     for (let idx = 0; idx < lines.length; idx++) {
//         if (isTxtLineClicked(gStartPos)) {
//             // setSelectedTxtLineIdx(idx)
//             // console.log(getMeme.selectedLineIdx)
//             renderSelectedTxtLineFrame(idx)
//             renderTxtLineInInput()
//             renderMeme()
//             return
//         }
//     }
// }


