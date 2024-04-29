
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("qual o melhor professor do emilio?");

    
    if (respostaTime.toLowerCase() === "Miderson") {
      alert("mintira so quero nota");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! dica, talvez seje o Miderson.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();
