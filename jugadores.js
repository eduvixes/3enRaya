function setjugador1(){


    player1['nombrejugador']=$("#valordato").val();
    player1['signo']=circle;

    mostrarjugador('jugador1', player1['nombrejugador'], player1['signo']);

    $("#valordato").val('');
    $("#botonaceptar").off('click');
    $("#datos").attr('style','display:none');

    $("#pedirjugador1").attr('style','display:none');

}

function setjugador2(){
    
    player2['nombrejugador']=$("#valordato").val();
    player2['signo']=cross;

    mostrarjugador('jugador2', player2['nombrejugador'], player2['signo']);

    $("#valordato").val('');
    $("#datos").attr('style','display:none');

    $("#pedirjugador2").attr('style','display:none');


}

function pedirdatos1(){
    
    $("#datos").attr('style','display:block');

    $("#valordato").val('');
    $("#textopedir").html("nombre jugador 1");
    $("#botonaceptar").on('click',setjugador1);

}

function pedirdatos2(){

    $("#datos").attr('style','display:block');
    
    $("#valordato").val('');
    $("#textopedir").html("nombre jugador 2");
    $("#botonaceptar").on('click',setjugador2);

}

function cambiarturno(){

    switch (turnojugador){
        case noplayer:
            turnojugador = player1;
            break;
        case player1:
            turnojugador = player2;
            break;
        case player2: 
            turnojugador = player1;
            break;
        default: 
            break;
        };

    pintarturno();
    pintartablero();

}