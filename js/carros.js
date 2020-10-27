var carros = [{ id: 1, idMarca: 1, logoCarro: "imgCarros/mazda1.jpeg", modelo: "cx-30", precio: "$110'000.000" },
{ id: 2, idMarca: 1, logoCarro: "imgCarros/mazda1.jpeg", modelo: "cx-30", precio: "$110'000.000" },
{ id: 3, idMarca: 1, logoCarro: "imgCarros/mazda1.jpeg", modelo: "cx-30", precio: "$110'000.000" }];
traerCarros()
function traerCarros(){
    $.ajax({
        method: 'GET',
        url: '/cgi-bin/carrosServidor/main.py',
        dataType:"json",
        success: function(rta){
        console.log(rta)
        console.log(JSON.stringify(rta))
        },
        error: function(rta){
        console.log(JSON.stringify(rta))
        }
    });

}

var idmar = getCookie("idmar");

cargarCarros();

function cargarCarros() {

    for (var i = 0; i < carros.length; i++) {
        if (parseInt(carros[i].idMarca) === parseInt(idmar)) {
            colocarCard(carros[i], idmar);
        } else {
        }
    }
}

function colocarCard(carro, idmar) {

 
    var texto = '<div class="ui link card product">' +

        '<div class="image">' +
        '<img src="' + carro.logoCarro + '">' +
        '</div>' +
        '<div class="content">' +
        '<span class="meta">Precio: </span>' +
        '<span class="right floated">' +
        '<i class="heart outline like icon"></i>' +
        '17 likes' +
        '</span>' +
        '<i class="dollar sign icon"></i>' +
        carro.precio +
        '</div>' +
        '<div class="extra content">' +
        '<div class="ui large transparent left icon input">' +
        '</div>' +
        '<div class="ui vertical animated button" tabindex="0">' +
        '<div class="hidden content">Añadir al carrito</div>' +
        '<div class="visible content">' +
        '<i class="shop icon"></i>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    $("#tarjetasCarros").append(texto);
}