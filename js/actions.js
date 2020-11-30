document.getElementById('motor').style.display = 'none';
document.getElementById('color').style.display = 'none';
document.getElementById('cilindraje').style.display = 'none';
document.getElementById('potencia').style.display = 'none';
document.getElementById('fullequipo').style.display = 'none';
document.getElementById('traccion').style.display = 'none';
document.getElementById('frenos').style.display = 'none';
document.getElementById('seguridad').style.display = 'none';
document.getElementById('tarjetaCarro').style.display = 'none';


$("#btnMotor").click(function () {
    mostrar_ocultar('motor');
    $('#color').hide(); $('#cilindraje').hide(); $('#potencia').hide();
    $('#fullequipo').hide(); $('#traccion').hide(); $('#frenos').hide(); $('#seguridad').hide();
});
$("#btnColor").click(function () {
    mostrar_ocultar('color');
    $('#motor').hide(); $('#cilindraje').hide(); $('#potencia').hide();
    $('#fullequipo').hide(); $('#traccion').hide(); $('#frenos').hide(); $('#seguridad').hide();
});
$("#btnCilindraje").click(function () {
    mostrar_ocultar('cilindraje');
    $('#color').hide(); $('#motor').hide(); $('#potencia').hide();
    $('#fullequipo').hide(); $('#traccion').hide(); $('#frenos').hide(); $('#seguridad').hide();
});
$("#btnPotencia").click(function () {
    mostrar_ocultar('potencia');
    $('#color').hide(); $('#cilindraje').hide(); $('#motor').hide();
    $('#fullequipo').hide(); $('#traccion').hide(); $('#frenos').hide(); $('#seguridad').hide();
});
$("#btnFull").click(function () {
    mostrar_ocultar('fullequipo');
    $('#color').hide(); $('#cilindraje').hide(); $('#potencia').hide();
    $('#motor').hide(); $('#traccion').hide(); $('#frenos').hide(); $('#seguridad').hide();
});
$("#btnTraccion").click(function () {
    mostrar_ocultar('traccion');
    $('#color').hide(); $('#cilindraje').hide(); $('#potencia').hide();
    $('#fullequipo').hide(); $('#motor').hide(); $('#frenos').hide(); $('#seguridad').hide();
});
$("#btnFrenos").click(function () {
    mostrar_ocultar('frenos');
    $('#color').hide(); $('#cilindraje').hide(); $('#potencia').hide();
    $('#fullequipo').hide(); $('#traccion').hide(); $('#motor').hide(); $('#seguridad').hide();
});
$("#btnSeguridad").click(function () {
    mostrar_ocultar('seguridad');
    $('#color').hide(); $('#cilindraje').hide(); $('#potencia').hide();
    $('#fullequipo').hide(); $('#traccion').hide(); $('#frenos').hide(); $('#motor').hide();
});

$("#btnVolver").click(function () {
    document.getElementById('content1').style.display = 'block';
    document.getElementById('content2').style.display = 'none';
    $('#tarjetaCarro').empty();
});

function mostrar_ocultar(id) {
    var elemento = document.getElementById(id);
    if (!elemento) {
        return true;
    }
    if (elemento.style.display == "none") {
        elemento.style.display = "block"
    } else {
        elemento.style.display = "none"
    };
    return true;
};