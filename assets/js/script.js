//Daniel
const currentDisc = ''
let numeroDisco = 3
let numeroDeJogadas = 0;

const btnclose = document.querySelector(".close-winner").addEventListener("click", deixarNone);

function deixarNone() {
    const pop = document.querySelector(".pop")
    pop.classList.remove("winner--show")
    const popup = document.querySelector(".popup-winner")
    popup.classList.remove("winner--show")
}

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


function drag(evt) {

}

let verifica

function dragEnd(evt) {
    verifica = evt.path[1].lastElementChild
    if (evt.target == evt.path[1].lastElementChild) {
        dropZones.forEach(dropZone => {
            dropZone.classList.remove("zoneOn")
        })

        this.classList.remove("isMove")
    }
    if (verificarVitoria()) {
        const pop = document.querySelector(".pop")
        pop.classList.add("winner--show")
        const popup = document.querySelector(".popup-winner")
        popup.classList.add("winner--show")
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

    }
}

function dragLeave(evt) {

}

//Inclui a checkagem de vitória no drop
function drop(evt) {

}