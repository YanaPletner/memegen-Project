"use strict"

function renderMeme() {
    const meme = getMeme()
    const { selectedImgId } = meme

    const elImg = new Image()
    elImg.src = `meme-imgs/${selectedImgId}.jpg`

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

        gCtx.font = `${size}px ${getTxtLintFont(idx)}`
        gCtx.textAlign = 'center'

        gCtx.strokeStyle = 'black'
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

    lines.forEach((line, idx) => {
        const { size, width, pos } = line
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

function onChangeFont(font) {
    setTtxLineFont(font)
    renderMeme()
}

function onAlign(action) {
    const lines = getTxtLines()
    const idx = getSelectedTxtLineIdx()
    const line = lines[idx]

    switch (action) {
        case 'left':
            line.pos.x = line.width / 2 + 10
            break
        case 'center':
            line.pos.x = gElCanvas.width / 2
            break
        case 'right':
            line.pos.x = gElCanvas.width - line.width / 2 - 10
            break
    }
    renderMeme()
}

function onMoveTextLine(direction) {
    const step = 10

    const idx = getSelectedTxtLineIdx()
    const lines = getTxtLines()
    const line = lines[idx]

    switch (direction) {
        case 'up':
            line.pos.y -= step
            break
        case 'down':
            line.pos.y += step
            break
        case 'left':
            line.pos.x -= step
            break
        case 'right':
            line.pos.x += step
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
