
const circle = `circle`;
const cross = `cross`;
const vacio = 'vacio';

let tablero = [vacio,vacio,vacio,vacio,vacio,circle,cross,vacio,vacio];
let fila0 =    [tablero[0],tablero[1],tablero[2]];
let fila1 =    [tablero[3],tablero[4],tablero[5]];
let fila2 =    [tablero[6],tablero[7],tablero[8]];
let columna0 = [tablero[0],tablero[3],tablero[6]];
let columna1 = [tablero[1],tablero[4],tablero[7]];
let columna2 = [tablero[2],tablero[5],tablero[8]];
let cruz1 =    [tablero[0],tablero[4],tablero[8]];
let cruz2 =    [tablero[2],tablero[4],tablero[6]];
let noplayer = {'nombrejugador':'', 'signo':''}; 
let player1 = {'nombrejugador':'', 'signo':''};
let player2 = {'nombrejugador':'', 'signo':''};
let ganador = '';
let sepuedecambiarturno = false;


let turnojugador = noplayer;

function contarsitres(combinacion, signo){
    
    gano = contarfichas(combinacion, signo);
    
    if (gano == 3){
        respuesta = true;
    }
    else{
        respuesta = false;
    }

    return respuesta;
}

function contarfichas(fichas, signo){
    numerofichas = fichas.filter(element => element == signo);
    return numerofichas.length;
}

function testsuccess(signo){
    
    if (contarsitres(fila0,signo)){
        return {'signo':signo, 'posiciones':[0,1,2]};
    }
    if (contarsitres(fila1,signo)){
        return {'signo':signo, 'posiciones':[3,4,5]};
    }
    if (contarsitres(fila2,signo)){
        return {'signo':signo, 'posiciones':[6,7,8]};
    }
    if (contarsitres(columna0,signo)){
        return {'signo':signo, 'posiciones':[0,3,6]};
    }
    if (contarsitres(columna1,signo)){
        return {'signo':signo, 'posiciones':[1,4,7]};
    }
    if (contarsitres(columna2,signo)){
        return {'signo':signo, 'posiciones':[2,5,8]};
    }
    if (contarsitres(cruz1, signo)){
        return {'signo':signo, 'posiciones':[0,4,8]};
    }
    if (contarsitres(cruz2, signo)){
        return {'signo':signo, 'posiciones':[2,4,6]};
    }
    return false;

}



function iniciardebug(){

   //debug
    player1['nombrejugador'] = 'javi';
    player1['signo'] = circle;
    player2['nombrejugador'] = 'lolo';
    player2['signo'] = cross;
    mostrarjugador('jugador1', player1['nombrejugador'], player1['signo']);
    mostrarjugador('jugador2', player2['nombrejugador'], player2['signo']);  
   //debug
   
}



function validarjugadores(){
    if ( (player1['nombrejugador'] == '') 
        || (player2['nombrejugador'] == '')) {
        alert('faltan jugadores');
    }
    else{
        $("#start-element").attr('style','display:none');
        $("#pedirjugadores").attr('style','display:none');
        Game();
    }

}

function initGame(){  

    $("#datos").attr('style','display:none');
    $("#turno").attr('style','display:none');
    $("#contenedortablero").attr('style','display:none');
    $("#ganador").attr('style','display:none');

    //$("#pedirjugadores").attr('style','display:block');

    //debug para no pedir datos jugadores
    iniciardebug();
    $("#pedirjugadores").attr('style','display:none');
    //debug

    $("#start-element").on('click',validarjugadores);

}

function Game(){


    pintarturno();
    pintartablero();

    let contador = 0;
    while ((ganador == '')){

        if (sepuedecambiarturno){
           cambiarturno();
           sepuedecambiarturno = false;
        }

        contador++;
        if (contador>3){
            ganador = 'javi';
        }



    }

}

