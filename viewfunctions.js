function mostrarjugador(nombre,signo){
	$("#jugador").html(nombre);
	ruta = './img/'+signo+'.png';
    $("#signo").attr('src',ruta);
}

function mostrarjugadores(){

	$("#jugador1").html(player1['nombrejugador']);
	$("#jugador2").html(player2['nombrejugador']);

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

function mostrarganador(){

	$("#ganador").attr('style','display:block');
	$("#nombreganador").html(turnojugador['nombrejugador']);
	$("#divotravez").attr('style','display:block');

}

function pintarganadora(posiciones){

	for (let i=0;i<3;i++){
		tablero[posiciones[i]]= 'ganador';
		pintasigno(posiciones[i]);
	}

}

function jugar(i){

	if ((contarfichas(tablero, turnojugador['signo']) < 3)){
		if (tablero[i] == vacio){	
			tablero[i] = turnojugador['signo'];
			pintasigno(i);
			rellenarcombinaciones();
			res = testsuccess(turnojugador['signo']);
			if (res == false){
				cambiarturno();
			}
			else{
				//pintar posiciones ganador
				pintarganadora(res['posiciones']);
				mostrarganador();
			}
		}
		else{
			
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

	imagen = "<img id='imagen" + i +"' class='celda' onclick='jugar("+i+");' src='./img/" + tablero[i] + ".png'" +">";

	$("#"+i).html(imagen);

}

