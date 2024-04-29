
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quem é o melhor professor ?");

    
    if (respostaTime.toLowerCase() === "Miderson") {
      alert("fake news, so quero nota");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! dica, talvez seje o Miderson.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
