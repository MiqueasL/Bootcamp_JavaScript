export function limpaCampo() {

document.getElementById('nome').value = '';
document.getElementById('idade').value = '';
document.getElementById('nivel').value ='';
document.getElementById('vitorias').value ='';
}

export function limpaCard(){

document.getElementById('nomeNovo').textContent = '';
document.getElementById('novaIdade').textContent = '';
document.getElementById('novaClasse').textContent = '';
document.getElementById('novoNivel').textContent = '';
document.getElementById('novaClassificacao').textContent = '';
document.getElementById('novaClasse').textContent = ''
document.getElementById('card__personagem').src = 'assets/empty.png';
document.getElementById('card__texto').textContent = ''
}

/*
document.getElementById('novaClasse').textContent = '';
document.getElementById('card__personagem').src = 'file (1).png';
document.getElementById('card__texto').textContent = '';
*/