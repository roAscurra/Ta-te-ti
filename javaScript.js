let playerText = document.getElementById('title')
let celdas = Array.from(document.getElementsByClassName('celda'))
const x_player="X"
const o_player="O"
let primerJugador=x_player
let cont=0
let mov=1
let casillas= Array(9).fill(null)
const iniciarJuego = () =>{
    celdas.forEach(celda => celda.addEventListener('click',celdaClick))
}
function celdaClick(x){
    const id = x.target.id
    if(!casillas[id]){
        if(ganador()==false){
            if(cont==0){
                primerJugador=x_player
            }else{
                primerJugador=o_player
            }
            if(cont==0){
                cont++
            }else if(cont==1){
                cont--
            } 
            casillas[id]=primerJugador
            x.target.innerText = primerJugador  
            if(mov==8 && ganador()==false){
                title.innerHTML = `Empate`
                mov=0
            }
            mov++
            if(ganador() !==false){
                playerText.innerHTML = `Jugador ${primerJugador} ha ganado!`
            }
        } 
    } 
}
function ganador(){
    if(casillas[0]==primerJugador && casillas[1]==primerJugador && casillas[2]==primerJugador){
        return true
    }
    if(casillas[3]==primerJugador && casillas[4]==primerJugador && casillas[5]==primerJugador){
        return true
    }
    if(casillas[6]==primerJugador && casillas[7]==primerJugador && casillas[8]==primerJugador){
        return true
    }
    if(casillas[0]==primerJugador && casillas[4]==primerJugador && casillas[8]==primerJugador){
        return true
    }
    if(casillas[2]==primerJugador && casillas[4]==primerJugador && casillas[6]==primerJugador){
        return true
    }
    if(casillas[0]==primerJugador && casillas[3]==primerJugador && casillas[6]==primerJugador){
        return true
    }
    if(casillas[1]==primerJugador && casillas[4]==primerJugador && casillas[7]==primerJugador){
        return true
    }
    if(casillas[2]==primerJugador && casillas[5]==primerJugador && casillas[8]==primerJugador){
        return true
    }
    return false
    
}
restart.addEventListener('click', reiniciar)
function reiniciar(){
    casillas.fill(null)
    celdas.forEach( celda => {
        celda.innerText = ''
        celda.style.backgroundColor=''
    })
    title.innerHTML = `Ta te ti`
    mov=0
    cont=0
}
iniciarJuego()