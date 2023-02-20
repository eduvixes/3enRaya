function mostrarjugador(id,nombre,signo){
	$("#"+id).html(nombre);
    $("#signo-"+id).html(signo);
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
	$("#signo").html(signo);
	$("#jugador").html(nombre);

}

function pintartablero(){
    
    $("#turno").attr('style','display:block');
    $("#contenedortablero").attr('style','display:block');

    for (i=0;i<9;i++){

    	switch (tablero[i]){
    		case vacio:
    			pintasigno(i);
    			//vaciosdisponibles();
    			break;
    		case circle:
    			pintasigno(i);
    			break;
    		case cross:
    			pintasigno(i);
    			break;
    		default:
    			break;
    	}

    }

}

function cambiaficha(i){
	tablero[i] = turnojugador['signo'];

	//que se pueda cambiar turno HACER
	sepuedecambiarturno = true;
	//cambiarturno();
	//

}

function incluiraccion(i){

	$("#imagen"+i).on('click',cambiaficha(i));
}

function pintasigno(i){

	imagen = "<img id='imagen" + i +"' onclick='cambiaficha(i);' class = 'contenidocelda' src='./img/" + tablero[i] + ".png'" +">";

	$("#"+i).html(imagen);

	incluiraccion(i);

}

