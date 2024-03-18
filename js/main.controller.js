"use strict"

let gElCanvas
let gCtx
let gStartPos
let gClickPos


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
    // gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
}

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchend', onUp)
// }




// function onDown(ev) {
//     ev.preventDefault()
//     gStartPos = getEvPos(ev)
//     console.log(isTxtLineClicked(gStartPos))

//     const lines = getTxtLines()
//     for (let idx = 0; idx < lines.length; idx++) {

// if (isTxtLineClicked(gStartPos)) {
// console.log(idx)
// setSelectedTxtLineIdx(idx)
// console.log(gMeme.selectedLineIdx)
//         renderSelectedTxtLineFrame(idx)
//         renderTxtLineInInput()
//         renderMeme()
//         return
// }
// }

// if (!isTxtLineClicked(gStartPos)) return

// setTxtLineDrag(true)
// document.body.style.cursor = 'grab'
// }

// function onDown(ev) {
//     gStartPos = getEvPos(ev)

//     const lines = getTxtLines()
//     for (let idx = 0; idx < lines.length; idx++) {
//         if (isTxtLineClicked(lines[idx], gStartPos)) {
//             setSelectedTxtLineIdx(idx)

//             renderSelectedTxtLineFrame(idx)

//             return
//         }
//     }

// }



// function onMove(ev) {
// ev.preventDefault()

//     const { isDrag } = getTxtLines()
//     if (!isDrag) return

//     const { offsetX, offsetY } = ev

//     // const pos = getEvPos(ev)

//     //     const dx = pos.x - gStartPos.x
//     //     const dy = pos.y - gStartPos.y

//     //     moveTxtLine(dx, dy)

//     //     gStartPos = pos

//     //     renderMeme()
//     const lines = getTxtLines()
//     const idx = getSelectedTxtLine()
//     lines[idx].pos.x = offsetX
//     lines[idx].pos.y = offsetY

//     renderMeme()
//     // 
// }



// function onUp() {
// ev.preventDefault()

//     setTxtLineDrag(false)
//     document.body.style.cursor = 'auto'
// }


function getEvPos(ev) {
    if (TOUCH_EVENTS.includes(ev.type)) {

        ev.preventDefault()
        ev = ev.changedTouches[0]

        return {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }

    } else {
        return {
            x: ev.offsetX,
            y: ev.offsetY,
        }
    }
}

function addListeners() {
    addMouseListeners()
    //     // addTouchListeners()

    //     //     // window.addEventListener('resize', () => {
    //     //     //     resizeCanvas()

    //     //     //     const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
    //     //     //     createCircle(center)

    //     //     //     renderCanvas()
    //     //     // })
}