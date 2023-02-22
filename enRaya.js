
const circle = `circle`;
const cross = `cross`;
const vacio = 'vacio';

let tablero = [vacio,vacio,vacio,vacio,vacio,vacio,vacio,vacio,vacio];

var fila0;
var fila1;
var fila2;
var columna0;
var columna1;
var columna2;
var cruz1;
var cruz2;

let noplayer = {'nombrejugador':'', 'signo':''}; 
let player1 = {'nombrejugador':'', 'signo':''};
let player2 = {'nombrejugador':'', 'signo':''};
let ganador = '';

let turnojugador = noplayer;

function rellenarcombinaciones(){

    fila0 =    [tablero[0],tablero[1],tablero[2]];
    fila1 =    [tablero[3],tablero[4],tablero[5]];
    fila2 =    [tablero[6],tablero[7],tablero[8]];
    columna0 = [tablero[0],tablero[3],tablero[6]];
    columna1 = [tablero[1],tablero[4],tablero[7]];
    columna2 = [tablero[2],tablero[5],tablero[8]];
    cruz1 =    [tablero[0],tablero[4],tablero[8]];
    cruz2 =    [tablero[2],tablero[4],tablero[6]];

}

function limpiardatos(){

    tablero = [vacio,vacio,vacio,vacio,vacio,vacio,vacio,vacio,vacio];

    $("#nombrejugador1").val('');
    $("#nombrejugador2").val('');

    $("#jugador").html('');
    $("#signo").html('');

    $("#jugador1").html('');
    $("#signo-jugador1").html('');
    $("#jugador2").html('');
    $("#signo-jugador2").html('');

    $("#nombreganador").html('');

}

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
    mostrarjugadores();
    turnojugador =  player1;
   //debug
   
}

function pedirdatosjugadores(){

    $("#datos").attr('style','display:block');
    $("#botonaceptar").on('click',validarjugadores);

    //debug para no pedir datos jugadores
    //iniciardebug();
    //$("#pedirjugadores").attr('style','display:none');
    //debug

}

function validarjugadores(){

    if ( ($("#nombrejugador1").val() == '') || ($("#nombrejugador2").val() == '') ) {
        alert('faltan datos jugadores');
        pedirdatosjugadores();
    }
    else{
        $("#datos").attr('style','display:none');
        obtenerdatosjugadores();
        Game();
    }

}

function initGame(){  

    $("#datos").attr('style','display:none');
    $("#turno").attr('style','display:none');
    $("#contenedortablero").attr('style','display:none');
    $("#ganador").attr('style','display:none');
    $("#divotravez").attr('style','display:none');
    limpiardatos();
    pedirdatosjugadores();
    
}

function Game(){

    cambiarturno();
    pintartablero();

}

