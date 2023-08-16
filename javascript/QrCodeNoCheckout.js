const checkoutInsertQrCode = (function() {

    // Insira seu HTML na variável 'yourHTML' abaixo:
    let yourHTML = "<p>Acesse o QR Code abaixo para realizar o pagamento:</p><div style='text-align:center'><img src='http://placehold.it/200x200'/></div>";

    // ---------- não edite daqui para baixo

    // Verificar se é a última etapa do checkout
    let url = window.location.href;
    if( !url.includes('/checkout/v3/success') )
        return;
    
    // Define o container
    let container = document.querySelector('.status-content .custom-payment');

    // Verifica foi selecionado 'pagamento personalizado' com a consulta de div que representa esse conteúdo
    if( !container )
        return;

    // Aplicar o 'youtHTML' no 'container'
    container.innerHTML = yourHTML;

}());
