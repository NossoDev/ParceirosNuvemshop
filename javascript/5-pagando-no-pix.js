$(document).ready(function() {
    var targetSpan = $('.js-product-payments-container strong.text-accent').parent();
    if(targetSpan.length > 0) {
        targetSpan.html('<strong class="text-accent">5% de desconto</strong> pagando com PIX');
    }
});

// Por @Koba
