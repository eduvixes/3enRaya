function mostrarjugador(nombre,signo){
	$("#jugardor").html(nombre);
    $("#signo").html(signo);
}


function pintarturno(){


	if (turnojugador == player1){
		nombre = player1['nombrejugador'];
		signo = player1['signo'];
	}
	else{
		nombre = player2['nombrejugador'];
		signo = player2['signo'];
	}

	mostrarjugador(nombre, signo);
}

function pintartablero(){
    
    $("#turno").attr('style','display:block');
    $("#contenedortablero").attr('style','display:block');

    for (i=0;i<9;i++){

    	pintasigno(i);

    }

}

function mostrarganador(jugador, posiciones){
	//pintar posiciones ganador
	alert(turnojugador['nombrejugador']);
}

function jugar(i){

	if ((contarfichas(tablero, turnojugador['signo']) < 3)){
		tablero[i] = turnojugador['signo'];
		pintasigno(i);
		rellenarcombinaciones();
		res = testsuccess(turnojugador['signo']);
		if (res == false){
			cambiarturno();
		}
		else{
			mostrarganador(turnojugador, res['posiciones']);
		}
	}
	else{
		if (tablero[i] == turnojugador['signo']){
			tablero[i] = vacio;
			pintasigno(i);
			rellenarcombinaciones();
		}
	}



}

function pintasigno(i){

	imagen = "<img id='imagen" + i +"' onclick='jugar("+i+");' class = 'contenidocelda' src='./img/" + tablero[i] + ".png'" +">";

	$("#"+i).html(imagen);

}

