


var enviaFormulario = function(){
	console.log("Yeiii ya envie el formulario");
	$nuevoContacto = $("#listaContactos");
	//Agrego el nuevo elemento
	$nuevoContacto.append("<div>");
	var $nuevaSeccion = $nuevoContacto[0].className="contacto";
	$nombre = $("#nombre").val();
	$apellido = $("#apellido").val();
	$telefono = $("#telefono").val();
	$email = $("#email").val();
	$nuevoContacto.append("<p>"+$nombre+"</p>");
	$nuevoContacto.append("<p>"+$apellido+"</p>");
	$nuevoContacto.append("<p>"+$telefono+"</p>");
	$nuevoContacto.append("<p>"+$email+"</p>");
}
 
var cargaPagina = function(){
	$('.modal').modal();
	$("#agregar").click(enviaFormulario);
}


$(document).ready(cargaPagina);
        
