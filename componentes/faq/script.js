document.addEventListener('DOMContentLoaded', (event) => {
  var perguntas = document.querySelectorAll('.perguntas');

  perguntas.forEach(function(pergunta) {
    pergunta.addEventListener('click', function() {
      var resposta = this.nextElementSibling;
      if (resposta.style.display === 'none' || resposta.style.display === '') {
        resposta.style.display = 'block'; // Se a resposta estiver escondida, mostra
      } else {
        resposta.style.display = 'none'; // Se a resposta estiver mostrando, esconde
      }
    });
  });
});
