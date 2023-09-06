function iniciarjuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)
}

 function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPidos = document.getElementById("pidos")

    if (inputHipodoge.checked){
        alert("seleccionaste a Hipodoge")
    }
        else if (inputCapipepo.checked){
            alert("seleccionaste a Capipepo")
        }
        else if (inputRatigueya.checked){
            alert("seleccionaste a Ratigueya")
        }
        else if (inputLangostelvis.checked){
            alert("seleccionaste a Langostelvis")
        }
        else if (inputTucapalma.checked){
            alert("seleccionaste a Tucapalma")
        }
        else if (inputPidos.checked){
            alert("seleccionaste a Pidos")
        }
        else {
            alert("seleciona una mascota")
        }
    
}

window.addEventListener("load", iniciarjuego)

