

var $contador= 0 ; 
var $muestraContador = $("#contador");

var sumaContador = function(){

	$contador++;
	
	$muestraContador.text($contador);
}
var enviaFormulario = function(){
	$nuevoContacto = $("#listaContactos");

	//Agrego el nuevo elemento
	var $contenedor = $("<div>");
	$contenedor.addClass("card  s12 m7");	

	$nombre = $("#nombre").val();
	$apellido = $("#apellido").val();
	$telefono = $("#telefono").val();
	$email = $("#email").val();
	var $elementoNombre =$("<p>Nombre: "+$nombre+"</p>");
	var $elementoApellido =$("<p>Apellido: "+$apellido+"</p>");
	var $elementoTelefono = $("<p>Telefono:"+$telefono+"</p>");
	var $elementoMail = $("<p>Email:"+$email+"</p>");




	$contenedor.append($elementoNombre);
	$contenedor.append($elementoApellido);
	$contenedor.append($elementoTelefono);
	$contenedor.append($elementoMail);

	$nuevoContacto.append($contenedor)

	console.log($nuevoContacto);
}
 
var cargaPagina = function(){
	$('.modal').modal();
	$("#agregar").click(enviaFormulario);
	$("#agregar").click(sumaContador);
}


$(document).ready(cargaPagina);
        
