//Daniel
const currentDisc = ''
let numeroDisco = 3
let numeroDeJogadas = 0;

const checkSize = (ramroad, currentDisc) => {
    const discAbove = ramroad.children[ramroad.children.length - 1]
    return currentDisc.clientWidth > discAbove.clientWidth
}

function verificarVitoria() {
    if (document.getElementById("end").children.length == numeroDisco) {
        return true
    }
    return false
}

const disco_1 = document.querySelectorAll(".disco")



disco_1.forEach(disco => {
    disco.addEventListener("dragstart", dragStart)
    disco.addEventListener("drag", drag)
    disco.addEventListener("dragend", dragEnd)
})

let discoAtual

function dragStart(evt) {
    discoAtual = evt.target
    if (evt.target == evt.path[1].lastElementChild) {
        dropZones.forEach(dropZone => {
            dropZone.classList.add("zoneOn")
        })
        this.classList.add("isMove")
    }
}


function drag() {}

let verifica

function dragEnd(evt) {
    verifica = evt.path[1].lastElementChild
    if (evt.target == evt.path[1].lastElementChild) {
        dropZones.forEach(dropZone => {
            dropZone.classList.remove("zoneOn")
        })

        this.classList.remove("isMove")
    }
}




/* soltar disco*/
const dropZones = document.querySelectorAll(".vareta")

dropZones.forEach(zones => {
    zones.addEventListener("dragenter", dragEnter)
    zones.addEventListener("dragover", dragOver)
    zones.addEventListener("dragleave", dragLeave)
    zones.addEventListener("drop", drop)
})

function dragEnter() {

}

function dragOver(evt) {

    const discoMove = document.querySelector(".isMove")
    if (discoMove != null) {
        if (this.children.length == 0) {

            this.appendChild(discoMove)
            numeroDeJogadas++
        } else if (this.children.length >= 1) {
            if (!checkSize(this, discoAtual)) {
                this.appendChild(discoMove)
                numeroDeJogadas++
            }
        }

    } else {
        this.classList.remove("over")
    }
    if (verificarVitoria()) {

    }
}

function dragLeave(evt) {
    this.classList.remove("over")
}

function drop() {}