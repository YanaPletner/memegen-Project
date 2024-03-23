"use strict"

let gElCanvas
let gCtx

let gStartPos

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    addListeners()
    renderGallery()
    renderMeme()
}

function addMouseListeners() {
    gElCanvas.addEventListener('click', onTxtLineClick)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchclick', onTxtLineClick)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function getEvPos(ev) {
    if (TOUCH_EVENTS.includes(ev.type)) {

        ev.preventDefault()
        ev = ev.changedTouches[0]

        return {
            clickedX: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            clickedY: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }

    } else {
        return {
            clickedX: ev.offsetX,
            clickedY: ev.offsetY,
        }
    }
}

function onDown(ev) {
    gStartPos = getEvPos(ev)
    const lines = getTxtLines()

    lines.forEach((line, idx) => {
        if (!isTxtLineClicked(gStartPos, line)) return
        setSelectedTxtLineIdx(idx)
        setTxtLineDrag(true)
        gElCanvas.style.cursor = 'grabbing'
    })
}

function onMove(ev) {
    const lines = getTxtLines()
    const idx = getSelectedTxtLineIdx()

    const { isDrag } = lines[idx]
    if (!isDrag) return

    const { clickedX, clickedY } = getEvPos(ev)
    setTxtLinePos(clickedX, clickedY)

    gStartPos = getEvPos(ev)
    renderMeme()
}

function onUp() {
    setTxtLineDrag(false)
    gElCanvas.style.cursor = 'grab'
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open')
    const elMenuBtn = document.querySelector('.toggle-menu-btn span')

    if (document.body.classList.contains('menu-open')) {
        elMenuBtn.innerHTML = '<span class="fa-solid fa-xmark"></span>'
    } else {
        elMenuBtn.innerText = '☰'
    }
}
