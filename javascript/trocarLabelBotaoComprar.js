$(document).ready(function() {
    $('.js-open-quickshop-wording').each(function() {
        var text = $(this).text();
        if (text === "Comprar") {
            $(this).text("Compre já");
        }
    });
});

// Por @Koba
