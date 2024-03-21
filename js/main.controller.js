"use strict"

let gElCanvas
let gCtx

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
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchclick', onTxtLineClick)
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
