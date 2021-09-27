//Daniel
const currentDisc = ''

const moveDisc = evt => {
    const ramroad = evt.target //AQUI PENSO QUE O EVENT LISTENER ESTEJA EM UM ELEMENTO PAI
    document.body.toggleClass ('discSelected')
    if(currentDisc === '') {
        currentDisc = document.lastElementChild(ramroad)
    } else if (checkSize()){//verifique se pode ou não){
        ramroad.appendChild(currentDisc)
        currentDisc = ''
    } else {
        //Avisa que não pode e pede para selecionar novamente
        currentDisc = '' //anula a seleção
    }
}








//Gabi