//Daniel
const currentDisc = ''
let numeroDisco = 3
const moveDisc = evt => {
    const ramroad = evt.target //AQUI PENSO QUE O EVENT LISTENER ESTEJA EM UM ELEMENTO PAI
    if (ramroad.classList === 'vareta') {
        document.body.toggleClass('discSelected') // Muda o estilo do cursor
        if (currentDisc === '') {
            currentDisc = document.lastElementChild(ramroad)
        } else if (checkSize(ramroad, currentDisc)) { //verifique se pode ou não){
            ramroad.appendChild(currentDisc)
            currentDisc = ''
        } else {
            //Avisa que não pode e pede para selecionar novamente
            currentDisc = '' //anula a seleção
        }
    }
}

const checkSize = (ramroad, currentDisc) => {
    const discAbove = document.lastElementChild(ramroad)
    return currentDisc.clientWidth >= discAbove.clientWidth
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


function dragStart() {
    dropZones.forEach(dropZone => {
        dropZone.classList.add("zoneOn")
    })
    this.classList.add("isMove")
}

function drag() {}

function dragEnd() {
    dropZones.forEach(dropZone => {
        dropZone.classList.remove("zoneOn")
    })
    this.classList.remove("isMove")
}


function entrei(event) {
    console.log(event.target)

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

function dragOver() {
    this.classList.add("over")

    const discoMove = document.querySelector(".isMove")
    this.appendChild(discoMove)

}

function dragLeave() {
    this.classList.remove("over")
}

function drop() {}