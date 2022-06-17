var yduqs_rating = $(".c-module-rating");

yduqs_rating.each(function (index) {
    var modulo = $(this).closest('module').attr('id');
    modulo = modulo.match(/\d+/)[0];

    $(this).addClass('feedback_modulo' + modulo + ' ');
    starBlock = $(this).find('.star-rating');
    starLabels = starBlock.find('label');

    $(starLabels.get().reverse()).each(function (nota) {
        $(this).attr('id', 'mod' + modulo + '_nota' + (nota + 1));

        if($(window).width() >= 768) {
            $(this).attr('onclick', `rate_mod('${modulo}-${nota + 1}');`);
        } else {
            $(this).attr('onclick', `avaliarModuloMobile('${modulo}-${nota + 1}');`);
        }

    });

    $(this).closest('yduqs-module-rating').attr('module', modulo);

    $(this).find(".c-module-rating__button-container button").addClass('btn_mod'+modulo);
    $(this).find(".c-module-rating__button-container button").attr('onclick', "avaliarModulo('')");
    $(this).find(".c-module-rating__icon-box").attr('onclick', "closeRating('')");
});

window.onresize = function() {
    yduqs_rating.each(function (index) {
        var modulo = $(this).closest('module').attr('id');
        modulo = modulo.match(/\d+/)[0];
    
        $(this).addClass('feedback_modulo' + modulo + ' ');
        starBlock = $(this).find('.star-rating');
        starLabels = starBlock.find('label');
    
        $(starLabels.get().reverse()).each(function (nota) {
            $(this).attr('id', 'mod' + modulo + '_nota' + (nota + 1));
    
            if($(window).width() >= 768) {
                $(this).attr('onclick', `rate_mod('${modulo}-${nota + 1}');`);
            } else {
                $(this).attr('onclick', `avaliarModuloMobile('${modulo}-${nota + 1}');`);
            }
    
        });
    
        $(this).closest('yduqs-module-rating').attr('module', modulo);
    
        $(this).find(".c-module-rating__button-container button").addClass('btn_mod'+modulo);
        $(this).find(".c-module-rating__button-container button").attr('onclick', "avaliarModulo('')");
        $(this).find(".c-module-rating__icon-box").attr('onclick', "closeRating('')");
    });   
}


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


function rate_mod(modNota) {
    $(".c-module-rating__button-container button").removeAttr('disabled');

    modNota = modNota.split(/\s*\-\s*/g);
    modulo = modNota[0];
    nota = modNota[1];

    let mod_star = $('.feedback_modulo' + modulo).find('.star-rating');

    let btn_star = $('.btn_mod' + modulo);
    btn_star.attr('onclick', `avaliarModulo('${modulo}-${nota}')`)
    mod_star_label = mod_star.find('label');

    star_empty = ');"><i class="active material-icons large" aria-hidden="true">star</i></label>'
    star_full = ');"><i class="active material-icons large gold-star" aria-hidden="true">star</i></label>'
    
    if (nota == 1) {
        mod_star_label.each(function (index) {
            mod_star.html(`
                <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_empty}
                <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_empty}
                <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_empty}
                <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_empty}
                <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
            `);
        });
        window['mod' + modulo + 'nota'] = nota;
    }
    if (nota == 2) {
        mod_star_label.each(function (index) {
            mod_star.html(`
                <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_empty}
                <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_empty}
                <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_empty}
                <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_full}
                <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
            `);
        });
        window['mod' + modulo + 'nota'] = nota;
    }
    if (nota == 3) {
        mod_star_label.each(function (index) {
            mod_star.html(`
                <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_empty}
                <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_empty}
                <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_full}
                <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_full}
                <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
            `);
        });
        window['mod' + modulo + 'nota'] = nota;
    }
    if (nota == 4) {
        mod_star_label.each(function (index) {
            mod_star.html(`
                <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_empty}
                <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_full}
                <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_full}
                <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_full}
                <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
            `);
        });
        window['mod' + modulo + 'nota'] = nota;
    }
    if (nota == 5) {
        mod_star_label.each(function (index) {
            mod_star.html(`
                <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_full}
                <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_full}
                <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_full}
                <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_full}
                <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
            `);
        });
        window['mod' + modulo + 'nota'] = nota;
    }
}

function avaliarModuloMobile(modNota) {
    modNota = modNota.split(/\s*\-\s*/g);
    modulo = modNota[0];
    nota = modNota[1];

    if (modNota == '') {
        alert('escolha uma nota para o módulo')
    } else {
    
        let mod_star = $('.feedback_modulo' + modulo).find('.star-rating');
    
        let btn_star = $('.btn_mod' + modulo);
        btn_star.attr('disabled', 'true');
        mod_star_label = mod_star.find('label');
    
        star_empty = ');"><i class="active material-icons large" aria-hidden="true">star</i></label>'
        star_full = ');"><i class="active material-icons large gold-star" aria-hidden="true">star</i></label>'
        
        if (nota == 1) {
            mod_star_label.each(function (index) {
                mod_star.html(`
                    <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_empty}
                    <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_empty}
                    <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_empty}
                    <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_empty}
                    <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
                `);
            });
            window['mod' + modulo + 'nota'] = nota;
        }
        if (nota == 2) {
            mod_star_label.each(function (index) {
                mod_star.html(`
                    <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_empty}
                    <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_empty}
                    <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_empty}
                    <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_full}
                    <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
                `);
            });
            window['mod' + modulo + 'nota'] = nota;
        }
        if (nota == 3) {
            mod_star_label.each(function (index) {
                mod_star.html(`
                    <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_empty}
                    <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_empty}
                    <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_full}
                    <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_full}
                    <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
                `);
            });
            window['mod' + modulo + 'nota'] = nota;
        }
        if (nota == 4) {
            mod_star_label.each(function (index) {
                mod_star.html(`
                    <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_empty}
                    <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_full}
                    <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_full}
                    <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_full}
                    <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
                `);
            });
            window['mod' + modulo + 'nota'] = nota;
        }
        if (nota == 5) {
            mod_star_label.each(function (index) {
                mod_star.html(`
                    <label id="mod${modulo}_nota5" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-5'${star_full}
                    <label id="mod${modulo}_nota4" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-4'${star_full}
                    <label id="mod${modulo}_nota3" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-3'${star_full}
                    <label id="mod${modulo}_nota2" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-2'${star_full}
                    <label id="mod${modulo}_nota1" style="display: inline-block;margin-left: -3px;" onclick="rate_mod('${modulo}-1'${star_full}
                `);
            });
            window['mod' + modulo + 'nota'] = nota;
        }

        block_stars = btn_star.closest('.feedback_modulo' + modulo);
        disable_stars = block_stars.find('.star-rating');
        disable_stars_labels = disable_stars.find('label');

        disable_stars_labels.each(function (index) {
            $(this).removeAttr('onclick');
        });

        closeFeedback = $('#mod' + modulo + '_nota' + nota).closest('.c-rating');
        closeFeedback.removeClass('avaliar');
        closeFeedback.addClass('avaliado');
        closeFeedback.attr('disabled','');
        msgFeedback = closeFeedback.find('h3');
        msgFeedback.text('Recebemos sua avaliação!')
        $('#avaliacaoTema').attr('nota-mod' + modulo,nota)


        swapStars = closeFeedback.find('.star-rating');

        notaY = '<label><i class="active material-icons large gold-star" aria-hidden="true">star</i></label>';
        notaN = '<label><i class="active material-icons large" aria-hidden="true">star</i></label>';

        nota1 = notaN.repeat(4) + notaY;
        nota2 = notaN.repeat(3) + notaY.repeat(2);
        nota3 = notaN.repeat(2) + notaY.repeat(3);
        nota4 = notaN + notaY.repeat(4);
        nota5 = notaY.repeat(5);

        notaFinal = parseInt(window['mod1nota']) + parseInt(window['mod2nota']) + parseInt(window['mod3nota']) + parseInt(window['mod4nota']);
        notaFinal = notaFinal / numeroDeModulos;
        notaFinal = Math.ceil(notaFinal);

        modsAvaliados = $('.avaliado').length;

        if (modsAvaliados == numeroDeModulos) {
            notaTema = $('#avaliacaoTema').find('.star-rating');
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
    $(`.c-module-rating__button-container .btn_mod${modulo}`).addClass('d-none');
    setTimeout(function(){$(`.c-module-rating`).removeClass('open-rating');}, 1000);
    setTimeout(function(){$(`.c-module-rating`).addClass('d-none');}, 2000);
   
}

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
    msgFeedback.text('Recebemos sua avaliação !')
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
    $(`.c-module-rating__button-container .btn_mod${modulo}`).addClass('d-none');
    setTimeout(function(){$(`.c-module-rating`).removeClass('open-rating');}, 1000);
    setTimeout(function(){$(`.c-module-rating`).addClass('d-none');}, 2000);
}


function closeRating() { 
    yduqs_rating.removeClass('open-rating')
    setTimeout(function(){ yduqs_rating.addClass('d-none'); }, 1000);
}