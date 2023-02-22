function obtenerdatosjugadores(){

    player1['nombrejugador']=$("#nombrejugador1").val();
    player1['signo']=circle;

    player2['nombrejugador']=$("#nombrejugador2").val();
    player2['signo']=cross;

    mostrarjugadores();

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

}