// Procura o bloco de atividades
var yduqs_rating = $(".c-rating");

// Para cada bloco de atividade, adiciona o bloco de avaliação:
// DIV recebe classe "avaliar" pra mostrar o bloco (deve vir do feedback positivo)
yduqs_rating.each(function (index) {
    $(this).removeClass('d-none');
    var modulo = $(this).closest('module').attr('id');
    modulo = modulo.match(/\d+/)[0];

    $(this).addClass('feedback_modulo' + modulo + ' ');
    starBlock = $(this).find('.star-rating');
    starLabels = starBlock.find('label');

    $(starLabels.get().reverse()).each(function (nota) {
        $(this).attr('id', 'mod' + modulo + '_nota' + (nota + 1));
        $(this).attr('onclick', `avaliarModulo('${modulo}-${nota + 1}');`);
    });
});

// Gerador de variáveis de módulos para armazenar as notas
var numeroDeModulos = $('module[id*="modulo"]').length;
for (m = 1; m <= numeroDeModulos; m++) {
    window['mod' + m + 'nota'] = 0;
}

// Insere antes do footer o bloco de avaliação do tema geral
$('module#conclusao').after(`
<yduqs-section>
    <div id="avaliacaoTema" class="temaFeedback d-none">
        <h3 class="text-center py-5">Avaliação do tema:</h3>
        <div class="star-rating"></div>
    </div>
</yduqs-section>
`);

// Assinala valor pras variaveis de nota/módulo
window['mod1nota'] = '0';
window['mod2nota'] = '0';
window['mod3nota'] = '0';
window['mod4nota'] = '0';

function avaliarModulo(modNota) {

    console.log('avaliando...');
    
    modNota = modNota.split(/\s*\-\s*/g);
    modulo = modNota[0];
    nota = modNota[1];

    closeFeedback = $('#mod' + modulo + '_nota' + nota).closest('.c-rating');
    closeFeedback.removeClass('avaliar');
    closeFeedback.addClass('avaliado');
    closeFeedback.attr('disabled','');
    msgFeedback = closeFeedback.find('h3');
    msgFeedback.text('Obrigado pelo feedback!')
    $('#avaliacaoTema').attr('nota-mod' + modulo,nota)


    swapStars = closeFeedback.find('.star-rating');

    notaY = '<label><i class="active material-icons large gold-star" aria-hidden="true">star</i></label>';
    notaN = '<label><i class="active material-icons large" aria-hidden="true">star</i></label>';

    nota1 = notaN.repeat(4) + notaY;
    nota2 = notaN.repeat(3) + notaY.repeat(2);
    nota3 = notaN.repeat(2) + notaY.repeat(3);
    nota4 = notaN + notaY.repeat(4);
    nota5 = notaY.repeat(5);
    
    if (nota == 1) {
        swapStars.html(nota1);
        window['mod' + modulo + 'nota'] = nota;
    } else if (nota == 2) {
        swapStars.html(nota2);
        window['mod' + modulo + 'nota'] = nota;
    } else if (nota == 3) {
        swapStars.html(nota3);
        window['mod' + modulo + 'nota'] = nota;
    } else if (nota == 4) {
        swapStars.html(nota4);
        window['mod' + modulo + 'nota'] = nota;
    } else if (nota == 5) {
        swapStars.html(nota5);
        window['mod' + modulo + 'nota'] = nota;
    }

    notaFinal = parseInt(window['mod1nota']) + parseInt(window['mod2nota']) + parseInt(window['mod3nota']) + parseInt(window['mod4nota']);
    notaFinal = notaFinal / numeroDeModulos;
    notaFinal = Math.ceil(notaFinal);

    modsAvaliados = $('.avaliado').length;

    if (modsAvaliados == numeroDeModulos) {
        notaTema = $('#avaliacaoTema').find('.star-rating');
        $('#avaliacaoTema').removeClass('d-none');

        $('#avaliacaoTema').removeClass('d-none');
        $('#avaliacaoTema').attr('nota-tema', notaFinal);

        if (notaFinal == 1) {
            notaTema.html(nota1);
        } else if (notaFinal == 2) {
            notaTema.html(nota2);
        } else if (notaFinal == 3) {
            notaTema.html(nota3);
        } else if (notaFinal == 4) {
            notaTema.html(nota4);
        } else if (notaFinal == 5) {
            notaTema.html(nota5);
        }
    }
}


