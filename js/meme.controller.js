"use strict"

function renderMeme() {
    const meme = getMeme()
    const { selectedImgId } = meme

    const elImg = new Image()
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

    lines.forEach((line, idx) => {
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
    addTxtLine('ADD TEXT')
    renderTxtLineInInput()
    renderMeme()
}

function onSwitchTxtLine() {
    switchTxtLine()
    renderTxtLineInInput()
    renderMeme()
}

function onDownloadCanvas(elLink) {
    elLink.download = 'my-img.jpg'

    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl

}

function onTxtLineClick(ev) {
    ev.preventDefault()
    const lines = getTxtLines()

    lines.forEach((line, idx) => {
        if (isTxtLineClicked(getEvPos(ev), line)) {
            setSelectedTxtLineIdx(idx)
            renderTxtLineInInput()
            return
        }
    })
}

function onChangeTxtFont(font) {
    setTtxLineFont(font)
    renderMeme()
}

function onAlignTxt(action) {
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

function onMoveTextLine(direction) {
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

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg')

    function onSuccess(uploadedImgUrl) {
        const url = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${url}`)
    }
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}


function renderEmojis() {
    let emojis = getEmojis()

    const elEmojisModule = document.querySelector('.emojis-module')
    const strHTMLS = emojis.map(emoji => `<button onclick="onEmojiClick(event,'&#${emoji}')" class="emoji-item">&#${emoji}</button>`)
    elEmojisModule.innerHTML = strHTMLS.join('')
}

function onEmojiSelect(elEmoji) {
    const elEmojisModule = elEmoji.querySelector('.module-wrapper')
    elEmojisModule.classList.toggle('open')
}

function onEmojiClick(ev, emoji) {
    ev.stopPropagation()
    addTxtLine(emoji)
    renderMeme()
}

function onPrevPage(ev) {
    ev.stopPropagation()
    prevPage()
    renderEmojis()
}

function onNextPage(ev) {
    ev.stopPropagation()
    nextPage()
    renderEmojis()
}


function onOpenMemeEditor() {
    const elHtml = document.querySelector('html')
    const elModal = document.querySelector('.meme-editor')
    elModal.style.display = 'block'
    elHtml.style.overflow = 'hidden'
}

function onCloseMemeEditor() {
    const elHtml = document.querySelector('html')
    const elModal = document.querySelector('.meme-editor')
    elModal.style.display = 'none'
    elHtml.style.overflow = 'auto'
}
