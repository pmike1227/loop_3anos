
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("qual o melhor professor do emilio?");

    
    if (respostaTime.toLowerCase() === "Miderson") {
      alert("dica, talvez seje o Miderson");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("fake news, so quero nota.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();
