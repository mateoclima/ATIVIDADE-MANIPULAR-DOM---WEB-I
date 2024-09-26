// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando pela classe
const classe = document.getElementsByClassName("mensagem2");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando o botão que altera o título
const cmensagem = document.getElementById("btn-mudar-frases");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Evento de clique para alterar o texto do título
cmensagem.addEventListener("click", function () {
  for (let i=0; i<classe.length; i++){
    classe[i].textContent = `Criciúma ${i} tá voando!`
  }
});