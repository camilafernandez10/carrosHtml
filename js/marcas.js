var marcas=[{id:1,nombreMarca:"Mazda",logoMarca:"img/Lmazda.png"},
{id:2,nombreMarca:"Chevrolet",logoMarca:"img/Lchevrolet.jpg"},
{id:3,nombreMarca:"Mercedez",logoMarca:"img/Lmercedes.jpg"},
{id:4,nombreMarca:"Audi",logoMarca:"img/Laudi.jpg"},
{id:5,nombreMarca:"Maserati",logoMarca:"img/Lmaserati.jpg"}];

var carros=[{id:1,idMarca:1,logoCarro:"imgCarros/mazda1.jpeg",modelo:"cx-30",precio:"$110'000.000"}];
listaMarcas();


$("#tarjetas").on("click", ".link.card", function(){
    var idmar = $(this).prop("id");
	setCookie("idmar", idmar, 0.0001);
	window.location.assign("carros.html");
   
});

function listaMarcas(){
	var texto = '<table class="ui inverted purple table">'+
	'<thead>'+
	'<tr><th>marcas</th>'+
	'<th>Logos</th>'+
	'</tr></thead><tbody>';
	for (var i = 0; i<marcas.length; i++) {
		text = '<div id='+marcas[i].id+' class="ui link card">'+
		'<div class="image">'+
		'<img src="' +marcas[i].logoMarca+'">'+
		'</div>'+
		'<div class="ui content">'+
		'<a class="header">'+marcas[i].nombreMarca+'</a>'+
		'</div>'+
		'</div>'+
		'</div>';
        $("#tarjetas").append(text);
	}

};


function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
/**
*	Función para establecer el valor de una cookie con expiración
*	Función dada por w3schools
*/

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}