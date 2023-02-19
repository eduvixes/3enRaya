
/*
let fila = [` `,` `,` `];
let tablero = [fila, fila, fila];
let fila0 = [tablero[0][0],tablero[0][1],tablero[0][2]];
let fila1 = [tablero[1][0],tablero[1][1],tablero[1][2]];
let fila2 = [tablero[2][0],tablero[2][1],tablero[2][2]];
let columna0 = [tablero[0][0],tablero[1][0],tablero[2][0]];
let columna1 = [tablero[0][1],tablero[1][1],tablero[2][1]];
let columna2 = [tablero[0][2],tablero[1][2],tablero[2][2]];
let cruz1 = [tablero[0][0],tablero[1][1],tablero[2][2]];
let cruz2 = [tablero[0][2],tablero[1][1],tablero[2][0]];
*/

let tablero = ['','','O','','','','','',''];
let fila0 =    [tablero[0],tablero[1],tablero[2]];
let fila1 =    [tablero[3],tablero[4],tablero[5]];
let fila2 =    [tablero[6],tablero[7],tablero[8]];
let columna0 = [tablero[0],tablero[3],tablero[6]];
let columna1 = [tablero[1],tablero[4],tablero[7]];
let columna2 = [tablero[2],tablero[5],tablero[8]];
let cruz1 =    [tablero[0],tablero[4],tablero[8]];
let cruz2 =    [tablero[2],tablero[4],tablero[6]];
let player1 = {'nombrejugador':'', 'signo':''};
let player2 = {'nombrejugador':'', 'signo':''};
let ganador = '';
const circle = `O`;
const cross = `X`;

function contarsitres(combinacion, signo){
    prueba = combinacion.filter(element => element == signo);
    if (prueba.length == 3){
        respuesta = true;
    }
    else{
        respuesta = false;
    }
    return respuesta;
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

function setjugador1(){
    player1['nombrejugador']=$("#valordato").val();
    player1['signo']=circle;
    $("#jugador1").html(player1['nombrejugador']);
    $("#signo-jugador1").html(player1['signo']);
    $("#valordato").val('');
    $("#botonaceptar").on('click',false);
    //pedirdatos2();
}

function setjugador2(){
    player2['nombrejugador']=$("#valordato").val();
    player2['signo']=cross;
    $("#jugador2").html(player2['nombrejugador']);
    $("#signo-jugador2").html(player2['signo']);
    $("#valordato").val('');
    $("#botonaceptar").on('click',false);
    $("#datos").attr('style','display:none');
}

function pedirdatos1(){
    
    $("#start").attr('style','display:none');
    $("#datos").attr('style','display:block');
    $("#start-element").on('click',false);

    $("#textopedir").html("nombre jugador 1");
    $("#botonaceptar").on('click',setjugador1);

}

function pedirdatos2(){
    
    $("#datos").attr('style','display:block');

    $("#textopedir").html("nombre jugador 2");
    $("#botonaceptar").on('click',setjugador2);

}

async function pedir(){

    await pedirdatos1(); 
    pedirdatos2();
    
}

function pintartablero(){
    for (i=0;i<9;i++){
        $("#"+i).html(tablero[i]);
    }
}

function initGame(){
    $("#datos").attr('style','display:none');
    $("#start").attr('style','display:block');
    $("#start-element").on('click',pedir);


}

function Game(){
    
    while (!(ganador == '')){

        if (testsuccess(turno)){

        }
    }

}

function createtablero(){

}

function enRaya(){
    
    initGame();
    pintartablero();
    
}