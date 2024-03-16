"use strict"

function renderMeme() {
    const elImg = new Image()
    elImg.src = `meme-imgs/meme-imgs (square)/${getMeme()}.jpg`

    //Render an img on canvas
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        renderLines()
    }
}

function renderLines() {
    const lines = getLinesTxtMap()

    lines.forEach((line, idx) => {
        const { txt, size, color } = getLine(idx)

        gCtx.fillStyle = color
        //getTxtColor(idx)
        // gCtx.strokeStyle = 'black'

        gCtx.font = `${size}px Arial`
        //`${getTxtSize(idx)}px Arial`
        gCtx.textAlign = 'center'

        const x = gElCanvas.width / 2
        const y = gElCanvas.height / 2

        gCtx.fillText(txt, x, y)
        // gCtx.fillText(line, x, y)
        setLinePos(idx, x, y)
        // gCtx.strokeText(line, x, y)

        renderSelectedLineFrame(line, idx)
    })
}

function renderSelectedLineFrame(line, idx) {
    if (idx === getSelectedLineIdx()) {
        const textWidth = gCtx.measureText(line).width
        const textHeight = parseInt(gCtx.font)

        const framePadding = 5

        const frameX = (gElCanvas.width - textWidth) / 2 - framePadding
        const frameY = (gElCanvas.height / 2) - textHeight - framePadding

        const frameWidth = textWidth + (framePadding * 2)
        const frameHeight = textHeight + (framePadding * 2)

        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 2
        gCtx.strokeRect(frameX, frameY, frameWidth, frameHeight)
    }
}

function onTxtInput(text) {
    setLineTxt(text)
    renderMeme()
}

function onIncreaseFontSize() {
    increaseFontSize()
    renderMeme()
}

function onDecreaseFontSize() {
    decreaseFontSize()
    renderMeme()
}

function onColorPick(color) {
    setTxtColor(color)
    renderMeme()
}

function onAddLine(ev) {
    const newText = document.getElementById('text').value
    addLine(newText, ev.x, ev.y)
    renderMeme()
    renderSelectedLineFrame()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
}

function onDownloadCanvas(elLink) {
    elLink.download = 'my-img'

    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}