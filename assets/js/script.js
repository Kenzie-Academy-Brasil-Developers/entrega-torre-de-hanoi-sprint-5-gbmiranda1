//Daniel
const currentDisc = ''

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

const disco_1 = document.querySelector(".disco.um");
console.log(disco_1)
const vareta_offset = document.getElementById("offset")
vareta_offset.appendChild(disco_1)



//Gabi