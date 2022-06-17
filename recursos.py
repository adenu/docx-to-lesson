# Criação da base HTML
htmlStart = f"""
<!DOCTYPE html>
<html dir='ltr' lang='pt-br'>

<head>
    <meta http-equiv='content-type' content='text/html; charset=utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />

    <!-- Glassbox-->
    <script type='text/javascript' src='../glassbox/detector-dom.min_web_yduqs_temas.js'></script>
    <!-- Glassbox-->

    <!-- CDN JQuery -->
    <script src="https://stensineme.blob.core.windows.net/designsystem/cdn/libraries/jquery.min.js"></script>
    <!-- CDN JQuery -->

    <!-- Links Externos -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <!-- Arquivos Locais -->
    <script type='text/javascript' src='./js/menu.js'></script>
    <script type='text/javascript' src='./js/questions.js'></script>
    <script type='text/javascript' src='./js/config.js'></script>
    <link rel="stylesheet" href="./css/style.css" />
    <!-- Arquivos Locais -->

    <!-- Design System -->
    <link rel="stylesheet" href="https://stensineme.blob.core.windows.net/designsystem/cdn/fonts/roboto/fontface.css" />
    <link rel="stylesheet"
        href="https://stensineme.blob.core.windows.net/designsystem/cdn/webcomponents/web-components/web-components.css" />
    <link rel="stylesheet" href="https://stensineme.blob.core.windows.net/designsystem/cdn/themes/default.css" />
    <!-- Design System -->

    <title>{title}</title>
</head>

<body style="opacity:0;transition: opacity 500ms ease-in-out;transition-delay: 500ms;">
"""
htmlEnd = f"""
<!-- Inicio do Script Google Tag Manager BODY (NÂO REMOVER) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TB9FV25" height="0" width="0"
        style="display:none;visibility:hidden"></iframe></noscript>
<!-- Fim do Script Google Tag Manager BODY (NÂO REMOVER) -->

<!-- Import dos componentes em @yduqs/webcomponents -->
<script type="module"
    src="https://stensineme.blob.core.windows.net/designsystem/cdn/webcomponents/web-components/web-components.esm.js"></script>
<script nomodule
    src="https://stensineme.blob.core.windows.net/designsystem/cdn/webcomponents/web-components/web-components.js"></script>
<!-- Import dos componentes em @yduqs/webcomponents -->

</body>

</html>
"""
yduqs_cover = f"""
    <header>
        <!-- Menu do Tema -->
        <yduqs-menu id="menu"></yduqs-menu>
        <!-- Fim Menu do Tema -->

        <!-- Capa do Tema -->
        <yduqs-cover         
            background_img="img/imagem.jpg"
            background_img_title="Foto: Shutterstock.com"
            title_cover="{title}" 
            teacher="{author}"
            teacher_avatar= "img/avatar.png" 
            teacher_link="https://pt.wikipedia.org/"
            contributors=""
            background_text="true"
            cover_preparation="true" >
            
            <div slot="yduqs-cover-definition">
                <p class="c-paragraph u-text--medium">{definition}</p>
            </div>

            <div slot="yduqs-cover-purpose">
                <p class="c-paragraph u-text--medium">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.</p>
            </div>
            <div slot="yduqs-cover-preparation-text">
                <p class="c-paragraph u-text--medium">Antes de iniciar a leitura deste conteúdo, consulte o Código Civil e a Lei Complementar nº 155/2016.</p>
            </div>

        </yduqs-cover>
        <!-- Fim da Capa do Tema -->
    </header>
    """
