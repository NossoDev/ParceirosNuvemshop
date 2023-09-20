$(document).ready(function(){
    const changePhone = {
      from: "5599999999999", // Insira aqui como o telefone aparece atualmente
      to: "(99) 9 9999-9999" // Insira aqui como quer que apareça
    }
    $(".contact-link:contains("+changePhone.from+")").text(changePhone.to);
});
