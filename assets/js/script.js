let numberDisc = 3
let numberOfMoves = 0;

document.querySelector(".close-winner").addEventListener("click", enableNone);

const enableNone = () => {
    const pop = document.querySelector(".pop")
    pop.classList.remove("winner--show")
    const popup = document.querySelector(".popup-winner")
    popup.classList.remove("winner--show")
    reset()
}

const checkSize = (ramroad, currentDisc) => {
    const discAbove = ramroad.children[ramroad.children.length - 1]
    return currentDisc.clientWidth > discAbove.clientWidth
}

const checkWinner = () => {
    if (document.getElementById("end").children.length == numberDisc) {
        return true
    }
    return false
}

const disc_1 = document.querySelectorAll(".disco")



disc_1.forEach(disco => {
    disco.addEventListener("dragstart", dragStart)
    disco.addEventListener("dragend", dragEnd)
})

let currenteDisc
let elementParent

const dragStart = evt => {
    currenteDisc = evt.target
    elementParent = evt.closest
    if (evt.target == evt.closest.lastElementChild) {
        dropZones.forEach(dropZone => {
            dropZone.classList.add("zoneOn")
        })
        this.classList.add("isMove")
    }
}

const dragEnd = evt => {  
    if (evt.target == evt.closest.lastElementChild) {
        dropZones.forEach(dropZone => {
            dropZone.classList.remove("zoneOn")
        })
        this.classList.remove("isMove")
        if (elementParent != evt.closest) {
            numberOfMoves++
            incrementoSpan()
        }
    }
    if (checkWinner()) {
        const pop = document.querySelector(".pop")
        pop.classList.add("winner--show")
        const popup = document.querySelector(".popup-winner")
        popup.classList.add("winner--show")
    }
}

const dropZones = document.querySelectorAll(".vareta")

dropZones.forEach(zones => {
    zones.addEventListener("dragover", dragOver)
})

const dragOver = evt => {
    const discoMove = document.querySelector(".isMove")
    if (discoMove != null) {
        if (this.children.length == 0) {
            this.appendChild(discoMove)
        } else if (this.children.length >= 1) {
            if (!checkSize(this, currenteDisc)) {
                this.appendChild(discoMove)
            }
        }

    }
}

const incrementoSpan = () => {
    document.querySelector("#counter").innerText = numberOfMoves;
}
incrementoSpan()

document.querySelector(".reset_button").addEventListener("click", reset)

const reset = () => {
    let array = document.querySelectorAll(".disco")
    let arrayAux = []
    arrayAux.push(array[0])
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < arrayAux.length; j++) {
            if (array[i].clientWidth < arrayAux[j].clientWidth) {
                arrayAux.splice(j, 0, array[i])
                break;
            }
            if (j == arrayAux.length - 1) {
                arrayAux.push(array[i])
                break;
            }
        }
    }
    arrayAux.reverse()
    for (let i = 0; i < arrayAux.length; i++) {
        document.querySelector("#start").appendChild(arrayAux[i])
    }
    numberOfMoves = 0;
    incrementoSpan()
}

let btn = document.querySelector(".popup-nivel")
btn.addEventListener("click", escolherDificuldade);
document.querySelector(".dificuldade").addEventListener("click", voltarInicio);

const voltarInicio = () => {
    document.querySelector(".pop").style.display = "flex"
    document.querySelector(".popup-nivel").style.display = "flex"
    document.querySelector(".dificuldade").style.display = "none";
    document.querySelector(".varetas").style.display = "none";
}

const escolherDificuldade = evt => {
    document.querySelector(".pop").style.display = "none"
    document.querySelector(".dificuldade").style.display = "flex"
    btn.style.display = "none";
    document.querySelector(".varetas").style.display = "flex"
    numberDisc = 3
    if (document.querySelector(".quatro") != null) {
        document.querySelector(".quatro").parentNode.removeChild(document.querySelector(".quatro"))
    }
    if (document.querySelector(".cinco") != null) {
        document.querySelector(".cinco").parentNode.removeChild(document.querySelector(".cinco"))
    }
    if (evt.target.id == "normal") {
        createDisc("normal")
    } else if (evt.target.id == "hard") {
        createDisc("hard")
    }
    reset()
}

const createDisc = dificuldade => {
    if (document.querySelector(".quatro") == null) {
        const div = document.createElement("div");
        div.classList.add("disco")
        div.classList.add("quatro")
        div.setAttribute("draggable", true)
        div.addEventListener("dragstart", dragStart)
        div.addEventListener("drag", drag)
        div.addEventListener("dragend", dragEnd)
        document.querySelector("#start").appendChild(div)
        numberDisc = 4
        if (dificuldade == "hard" && document.querySelector(".cinco") == null) {
            const div2 = document.createElement("div");
            div2.classList.add("disco")
            div2.classList.add("cinco")
            div2.setAttribute("draggable", true)
            div2.addEventListener("dragstart", dragStart)
            div2.addEventListener("drag", drag)
            div2.addEventListener("dragend", dragEnd)
            document.querySelector("#start").appendChild(div2)
            numberDisc = 5
        }
    }

}