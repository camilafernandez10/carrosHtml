var carros = [];

traerCarros()
function traerCarros(){
    $.ajax({
        method: 'GET',
        url: '/cgi-bin/carrosServidor/main.py',
        dataType:"json",
        success: function(rta){
        console.log(rta[0].idMarca)
        carros = rta;
        console.log(carros)
        cargarCarros();
        },
        error: function(rta){
        console.log(JSON.stringify(rta))
        }
    });

}

var idmar = getCookie("idmar");


function cargarCarros() {
    console.log(carros)
    for (var i = 0; i < carros.length; i++) {
        if (parseInt(carros[i].idMarca) === parseInt(idmar)) {
            colocarCard(carros[i], idmar);
        } else {
        }
    }
}

function colocarCard(carro, idmar) {

}