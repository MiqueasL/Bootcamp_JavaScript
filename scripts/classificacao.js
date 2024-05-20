export function classificacao() {

    let vitorias = document.getElementById('vitorias').value;

    let novaVitorias = document.getElementById('novaClassificacao');

    if (vitorias <= 0) {
        novaVitorias.textContent = 'Sem Nivel'
    }

    else if (vitorias <= 10) {
        novaVitorias.textContent = 'Ferro'
    }

    else if (vitorias == 11 || vitorias <= 20) {
        novaVitorias.textContent = 'Bronze'
    }

    else if (vitorias == 21 || vitorias <= 50) {
        novaVitorias.textContent = 'Prata'
    }

    else if (vitorias == 51 || vitorias <= 80) {
        novaVitorias.textContent = 'Ouro'
    }

    else if (vitorias == 81 || vitorias <= 90) {
        novaVitorias.textContent = 'Diamante'
    }

    else if (vitorias === 91 || vitorias <= 100) {
        novaVitorias.textContent = 'lenadario'
    }

    else {
        novaVitorias.textContent = 'Imortal'
    }

}
