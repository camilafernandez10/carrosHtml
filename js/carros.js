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
    console.log(parseInt(idmar));
    for (var i = 0; i < carros.length; i++) {
        if (parseInt(carros[i].idMarca) === parseInt(idmar)) {
            colocarCard(carros[i], idmar);
        } else if(isNaN(parseInt(idmar))){
            colocarCard(carros[i], idmar);
        }
    }
}

function colocarCard(carro, idmar) {
    var texto = '<div id='+ carro.id + ' class="ui link card product">' +
        '<div class="image">' +
        '<img src="' + carro.logoCarro + '">' +
        '</div>' +
        '<div class="content">' +
        '<a class="header">' + carro.modelo + '</a>'+
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


document.getElementById('content2').style.display = 'none';

var idcar;
var app = new Vue({
    el: '#app',
    data: {
        datos: null,
        caract: null,
        motor: null,
        color: null,
        cilindraje: null,
        potencia: null,
        fullequipo: null,
        traccion: null,
        frenos: null,
        seguridad: null,
        url: 'http://ec2-35-174-207-125.compute-1.amazonaws.com:5000/'
    },
    methods: {

        f: function () {
            axios.get(this.url + 'ping')
                .then(response => {
                    this.datos = response.data;
                })
                .catch(error => console.error(error));
        },

        mostrar: function () {
            document.getElementById('content2').style.display = 'block';
            document.getElementById('content1').style.display = 'none';
            axios.get(this.url + 'caract')
                .then(response => {
                    this.caract = response.data.caract;
                    console.log(response.data);
                    console.log(this.caract);
                    for (var i = 0; i < this.caract.length; i++) {
                        if (parseInt(this.caract[i].id) === parseInt(idcar)) {
                            this.motor = this.caract[i].motor
                            this.color = this.caract[i].color
                            this.cilindraje = this.caract[i].cilindraje
                            this.potencia = this.caract[i].potencia
                            this.fullequipo = this.caract[i].fullequipo
                            this.traccion = this.caract[i].traccion
                            this.frenos = this.caract[i].frenos
                            this.seguridad = this.caract[i].seguridad
                        }
                    }
                })
                .catch(error => console.error(error));

        }
    },
    created() {
        this.f();
    },
})
$("#tarjetasCarros").on("click", ".link.card", function () {
    idcar = $(this).prop("id");
    img = $(this).prop("logoCarro");
    modelo = $(this).prop("modelo");
    precio = $(this).prop("precio");
    console.log(idcar)
    console.log(img)
    console.log(modelo)
    console.log(precio)
    //colocarCard2(idcar, img, modelo, precio);
});