$(() => {

    $("#form-suscripcion").on("submit", function(e){
        console.log($("#nombre", this));
        e.preventDefault();
        var nombre = $("#nombre", this).val();
        var apellido = $("#apellido", this).val();
        var email = $("#correo", this).val();

        alert(`Gracias ${nombre} ${apellido} por preferirnos, te contactaremos al ${email}.`)
        $('#staticBackdrop').modal('hide')
        $("#form-suscripcion")[0].reset();
    })







})