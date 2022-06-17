window.addEventListener('DOMContentLoaded', function () {
    
    var menu = document.querySelector("#menu");

    menu.settings = {
        "title": "Título do Tema",
        "itemList": [{
            "id": 0,
            "label": "Introdução",
            "href": "#apresentacao"
        },

        {
            "id": 1,
            "label": "Módulo 1",
            "detail": "1. Título do Primeiro Módulo ",
            "href": "#modulo1"
        },

        {
            "id": 2,
            "label": "Módulo 2",
            "detail": "2. Título do Segundo Módulo",
            "href": "#modulo2"
        },

        {
            "id": 3,
            "label": "Módulo 3",
            "detail": "3. Título do Terceiro Módulo",
            "href": "#modulo3"
        },
        {
            "id": 4,
            "label": "Conclusão",
            "detail": "4. Considerações finais",
            "href": "#conclusao"
        }
        ]
    };
});