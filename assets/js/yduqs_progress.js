var url = location.href;
url = url.split("/");
var subDominio = url[url.length - 2];

var apresentacao = document.querySelector('#apresentacao');
var modulo1 =  document.querySelector('#modulo1');
var modulo2 =  document.querySelector('#modulo2');
var modulo3 =  document.querySelector('#modulo3');
var modulo4 =  document.querySelector('#modulo4');
var conclusao = document.querySelector('#conclusao');

var apresentacao_inicio = apresentacao.getBoundingClientRect().y;
var apresentacao_altura = apresentacao.getBoundingClientRect().height;
var apresentacao_fim = apresentacao_inicio + apresentacao_altura;

var modulo1_inicio = modulo1.getBoundingClientRect().y;
var modulo1_altura = modulo1.getBoundingClientRect().height;
var modulo1_fim = modulo1_inicio + modulo1_altura;

var modulo2_inicio = modulo2.getBoundingClientRect().y;
var modulo2_altura = modulo2.getBoundingClientRect().height;
var modulo2_fim = modulo2_inicio + modulo2_altura;

var modulo3_inicio = modulo3.getBoundingClientRect().y;
var modulo3_altura = modulo3.getBoundingClientRect().height;
var modulo3_fim = modulo3_inicio + modulo3_altura;

if(modulo4 != null){
    var modulo4_inicio = modulo4.getBoundingClientRect().y;
    var modulo4_altura = modulo4.getBoundingClientRect().height;
    var modulo4_fim = modulo4_inicio + modulo4_altura;
}

var conclusao_inicio = conclusao.getBoundingClientRect().y;
var conclusao_altura = conclusao.getBoundingClientRect().height;
var conclusao_fim = conclusao_inicio + conclusao_altura;

var menu = document.querySelector('#menu');

var md1 = document.querySelector('#card-modulo1') 
var md2 = document.querySelector('#card-modulo2') 
var md3 = document.querySelector('#card-modulo3') 
var md4 = document.querySelector('#card-modulo4') 

var progress1 = 0;
var progress2 = 0;
var progress3 = 0;
var progress4 = 0;

var full1 = false;
var full2 = false;
var full3 = false;
var full4 = false;

var valueStorage = JSON.parse(verificaStorage());

if (valueStorage != null && valueStorage[0].codigoTema == subDominio) {

    if (valueStorage[0].modulo1 != true) {      
        window.scroll(0, valueStorage[0].modulo1);
        menu.setAttribute('position', 1);  
    } else if (valueStorage[0].modulo2 != true) {
        full1 = true;
        md1.setAttribute('progress', 100)
        window.scroll(0, valueStorage[0].modulo2);
        menu.setAttribute('position', 2);  
    } else if (valueStorage[0].modulo3 != true) {
        full2 = true;
        md2.setAttribute('progress', 100)
        window.scroll(0, valueStorage[0].modulo3);
        menu.setAttribute('position', 3);  
    } else if (valueStorage[0].modulo4 != true) {
        full3 = true;
        md3.setAttribute('progress', 100)
        window.scroll(0, valueStorage[0].modulo4);
        menu.setAttribute('position', 4);  
    }
}


window.onscroll = function () {
    var posicaoScroll = document.documentElement.scrollTop;

    if(posicaoScroll < apresentacao_fim){

        menu.setAttribute('position', 0);

    } else if(posicaoScroll < modulo1_fim){
            menu.setAttribute('position', 1);

            if(full1 !== true)
            adicionaStorage(subDominio, posicaoScroll, 0, 0, 0);

            var percent_modulo1 =  (((posicaoScroll - modulo1_inicio) * 100) / modulo1_altura).toFixed();         

            if(progress1 < percent_modulo1){
                progress1 = percent_modulo1;        

                if(progress1 > 95){
                    progress1 = 100;
                    full1= true;
                }

                md1.setAttribute('progress', progress1)
            }
    } else if(posicaoScroll < modulo2_fim){ 
        menu.setAttribute('position', 2);

        md1.setAttribute('progress', 100)

        full1 = true;

        if(full2 !== true)
        adicionaStorage(subDominio, true, posicaoScroll, 0, 0);

        var percent_modulo2 =  (((posicaoScroll - modulo2_inicio) * 100) / modulo2_altura).toFixed();
        
        if(progress2 < percent_modulo2){
            progress2 = percent_modulo2;     

            if(progress2 > 95){
                progress2 = 100;
                full2= true;
            }

            md2.setAttribute('progress', progress2)
        }
    }else if(posicaoScroll < modulo3_fim){
        menu.setAttribute('position', 3);

        md1.setAttribute('progress', 100)
        md2.setAttribute('progress', 100)

        full1= true;
        full2= true;

        if(full3 !== true)
        adicionaStorage(subDominio, true, true, posicaoScroll, 0);

        var percent_modulo3 =  (((posicaoScroll - modulo3_inicio) * 100) / modulo3_altura).toFixed();
        
        if(progress3 < percent_modulo3){
            progress3 = percent_modulo3;     

            if(progress3 > 95){
                progress3 = 100;
                full3= true;
            }

            md3.setAttribute('progress', progress3);
        }

    } else if(posicaoScroll < modulo4_fim && modulo4 != null){
        menu.setAttribute('position', 4);

        md1.setAttribute('progress', 100)
        md2.setAttribute('progress', 100)
        md3.setAttribute('progress', 100)

        full1= true;
        full2= true;
        full3 = true;

        if(full4 !== true)
        adicionaStorage(subDominio, true, true, true, posicaoScroll);

        var percent_modulo4 =  (((posicaoScroll - modulo4_inicio) * 100) / modulo4_altura).toFixed();
        
        if(progress4 < percent_modulo4){
            progress4 = percent_modulo4;    

            if(progress4 > 95){
                progress4 = 100;
                full4 = true;
            }

            md4.setAttribute('progress', progress4)
        }

    }
}

function verificaStorage() {
    var loadStorage = localStorage.getItem('progress')
    return loadStorage;
}

function adicionaStorage(t1, m1, m2, m3, m4) {
    var progress = localStorage['progress'] ? JSON.parse(localStorage['progress']) : [];
    progress.splice(0, 1, {
        codigoTema: t1,
        modulo1: m1,
        modulo2: m2,
        modulo3: m3,
        modulo4: m4,
    });
    localStorage.setItem('progress', JSON.stringify(progress));
}


