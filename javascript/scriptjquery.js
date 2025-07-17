$(document).ready(function () {
    // Ocultar e exibir a caixa com fade
    $("#ocultarCaixa").click(function () {
        $("#caixa1").fadeOut(function () {
            $(this).delay(1000).fadeIn();
        });
    });

    // Ocultar toda a lista
    $("#ocultarTudo").click(function () {
        $("#lista").fadeOut();
    });

    // Mostrar toda a lista
    $("#mostrarTudo").click(function () {
        $("#lista").fadeIn();
    });

    // Ocultar e mostrar com delay
    $("#ocultarMostrar").click(function () {
        $("#lista").fadeOut(function () {
            $(this).delay(1000).fadeIn();
        });
    });

    // Alterar opacidade com lista dropdown
    $("#selOpacidade").change(function (e) {
        var opacidadeEsc = e.target.options[e.target.selectedIndex].value;
        $("h2").fadeTo(500, opacidadeEsc);
    });

    // Mostrar valor do range na caixa de texto
    $("#percentagem").change(function () {
        $("#porcento").val($(this).val());
    });

    // Alterar opacidade de um elemento específico
    $("#mudar").click(function () {
        var opacidade = $("#porcento").val();
        var elemento = "#" + $("#selElemento option:selected").val();
        $(elemento).fadeTo(500, opacidade);
    });

    // Resetar a página
    $("#resetFade").click(function () {
        location.reload();
    });
});
