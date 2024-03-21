"use strict"

function renderMeme() {
    const meme = getMeme()
    const { selectedImgId } = meme

    const elImg = new Image()
    elImg.src = elImg
    elImg.src = `meme-imgs/${selectedImgId}.jpg`

    elImg.onload = () => {
        gElCanvas.width = elImg.width * 3 / 5
        gElCanvas.height = elImg.height * 3 / 5

        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderTxtLines()
    }
}

function renderTxtLines() {
    const lines = getTxtLines()
    const selectedLineIdx = getSelectedTxtLineIdx()

    lines.forEach((line, idx) => {
        if (!idx === selectedLineIdx) return
        const { txt, size, color, pos } = line
        const { x, y } = pos

        gCtx.font = `${size}px ${getTxtLintFont(idx)}`
        gCtx.textAlign = 'center'

        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = color
        gCtx.lineWidth = 8

        gCtx.strokeText(txt, x, y)
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
//     const frameY = y - size / 2 - 25
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
    ev.preventDefault()
    const { clickedX, clickedY } = getEvPos(ev)
    const lines = getTxtLines()

    console.log(clickedX, clickedY)

    lines.forEach((line, idx) => {
        const { size, width, pos } = line
        const { x, y } = pos

        const topLeftX = x - width / 2 - size - 10
        const topRightX = x + width / 2 - size + 50
        const bottomLeftX = x - width / 2 - 10
        const bottomRightX = x + width / 2 + 50

        const topLeftY = y - width / 2 - size + 40
        const topRightY = y + width / 2 - size + 40
        const bottomLeftY = y - width / 2 - 40
        const bottomRightY = y + width / 2 - 40

        if (clickedX >= topLeftX && clickedX <= topRightX && clickedX >= bottomLeftX && clickedX <= bottomRightX &&
            clickedY >= topLeftY && clickedY <= topRightY && clickedY >= bottomLeftY && clickedY <= bottomRightY) {
            setSelectedTxtLineIdx(idx)
            renderTxtLineInInput()
            return
        }
    })
}

function onChangeFont(font) {
    setTtxLineFont(font)
    renderMeme()
}

function onAlign(action) {
    const lines = getTxtLines()
    const idx = getSelectedTxtLineIdx()
    const line = lines[idx]

    let { pos } = line
    let { y } = pos

    switch (action) {
        case 'left':
            setTxtLinePos(line.width / 2 + 10, y)
            break
        case 'center':
            setTxtLinePos(gElCanvas.width / 2, y)

            break
        case 'right':
            setTxtLinePos(gElCanvas.width - line.width / 2 - 10, y)
            break
    }
    renderMeme()
}

function onMoveTextLine(direction, ev) {
    ev.preventDefault()
    const step = 10

    const idx = getSelectedTxtLineIdx()
    const lines = getTxtLines()
    const line = lines[idx]
    let { pos } = line
    let { x, y } = pos

    switch (direction) {
        case 'up':
            setTxtLinePos(x, y - step)
            break
        case 'down':
            setTxtLinePos(x, y + step)
            break
        case 'left':
            setTxtLinePos(x - step, y)
            break
        case 'right':
            setTxtLinePos(x + step, y)
            break
    }
    renderMeme()
}

function onDeleteTxt() {
    document.getElementById('text').value = 'ADD TEXT'
    const idx = getSelectedTxtLineIdx()
    deleteTxt(idx)
    renderMeme()
}

function onSaveMeme() {
    saveMeme(val)
}
