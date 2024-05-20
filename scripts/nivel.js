export function nivelHeroi() {

    let nivel = parseInt(document.getElementById('nivel').value);
    let novoNivel = document.getElementById('novoNivel');

    if (nivel === 1000) {
        novoNivel.textContent = 'Ferro'
    }

    else if ((nivel >= 1001 && nivel <= 2000)) {
        novoNivel.textContent = 'Bronze'
    }

    else if ((nivel >= 2001 && nivel <= 5000)) {
        novoNivel.textContent = 'Prata'
    }

    else if ((nivel >= 6000 && nivel <= 7000)) {
        novoNivel.textContent = 'Ouro'
    }

    else if ((nivel >= 7001 && nivel <= 8000)) {
        novoNivel.textContent = 'Platina'
    }

    else if ((nivel >= 8001 && nivel <= 9000)) {
        novoNivel.textContent = 'Ascendente'
    }

    else if ((nivel >= 9001 && nivel <= 10000)) {
        novoNivel.textContent = 'Imortal'
    }

    else if (nivel >= 10001) {
        novoNivel.textContent = 'Radiante'
    }  

}




