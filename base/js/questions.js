// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <yduqs-image src="img/imagem.jpg" alt="" title="Foto: Shutterstock.com" loading="lazy">
                    </yduqs-image>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            }
        ]
    }

    const activity1 = document.querySelector('yduqs-questions[question_id="1"]');
    activity1.settings = question1;

    // Questões do Módulo 02
    var question2 = {
        "questions": [
            {
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            }
        ]
    }


    const activity2 = document.querySelector('yduqs-questions[question_id="2"]');
    activity2.settings = question2;

    // Questões do Módulo 03
    var question3 = {
        "questions": [
            {
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;

    // Mão na massa
    /* var exercises1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading"><strong>Mão na massa 1</strong></h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `
            }
        ]
    }

    const exercise1 = document.querySelector('yduqs-questions[exercise_id="1"]');
    exercise1.settings = exercises1; */

});