"use strict"

function renderMeme() {
    const meme = getMeme()
    const { selectedImgId } = meme

    const elImg = new Image()
    elImg.src = `meme-imgs/meme-imgs (square)/${selectedImgId}.jpg`

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

        gCtx.font = `${size}px Arial`
        gCtx.textAlign = 'center'

        gCtx.fillText(txt, x, y)

        const textWidth = gCtx.measureText(txt).width

        setTxtLineWidth(textWidth, idx)
    })
}

// function renderRectAroundText(idx) {
//     const lines = getTxtLines()

//     const { width, size, pos } = lines[idx]
//     const { x, y } = pos

//     const frameX = x - width / 2 - 10
//     const frameY = y - size / 2 - 20
//     const frameWidth = width + 25
//     const frameHeight = size + 20
//     gCtx.beginPath()
//     gCtx.strokeStyle = 'black'
//     gCtx.lineWidth = 2
//     gCtx.strokeRect(frameX, frameY, frameWidth, frameHeight)
// }

function renderTxtLineInInput() {
    const idx = getSelectedTxtLineIdx()
    const lines = getTxtLines()
    const { txt } = lines[idx]
    document.getElementById('text').value = txt
}

function onTxtLineInput(text) {
    setTxtLine(text)
    renderMeme()
}

function onIncreaseTxtLineFontSize() {
    increaseTxtLineFontSize()

    // const idx = getSelectedTxtLineIdx()
    // renderRectAroundText(idx)
    renderMeme()
}

function onDecreaseTxtLineFontSize() {
    decreaseTxtLineFontSize()

    const idx = getSelectedTxtLineIdx()
    // renderRectAroundText(idx)

    renderMeme()
}

function onColorPick(color) {
    setTxtLineColor(color)
    renderMeme()
}

function onAddLine() {
    let newText = document.getElementById('text').value
    newText = 'ADD TEXT'

    addTxtLine(newText)

    getSelectedTxtLineIdx()
    renderTxtLineInInput()
    renderMeme()

}

function onSwitchTxtLine() {
    switchTxtLine()
    renderTxtLineInInput()
    renderMeme()
}

function onDownloadCanvas(elLink) {
    elLink.download = 'my-img'

    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}

function onTxtLineClick(ev) {
    const clickedX = ev.offsetX
    const clickedY = ev.offsetY

    const lines = getTxtLines()

    lines.forEach((line, idx) => {
        const { txt, size, width, pos } = line
        const { x, y } = pos

        const distanceX = Math.abs(x - clickedX)
        const distanceY = Math.abs(y - clickedY)

        if (distanceY <= size && distanceX <= width) {
            setSelectedTxtLineIdx(idx)
            renderTxtLineInInput()

            return
        }
    })
}
