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
    disco.addEventListener("touchstart", dragStart)
    disco.addEventListener("touchend", dragEnd)

})

let discoAtual

function dragStart(evt) {
    discoAtual = evt.target
    console.log(discoAtual)
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

        this.appendChild(discoMove)

    }



}

function dragLeave(evt) {

    this.classList.remove("over")


}

function drop() {}