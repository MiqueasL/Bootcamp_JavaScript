export function infoHeroi() {

  let nome = document.getElementById('nome').value;
  let idade = document.getElementById('idade').value;

  let novoNome = document.getElementById('nomeNovo');
  novoNome.textContent = nome
  novoNome.style.fontSize = '16px'

  document.getElementById('novaIdade').textContent = idade

};

