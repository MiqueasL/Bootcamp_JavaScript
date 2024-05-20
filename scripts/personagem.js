export function persImgBio() {
    let classe = document.getElementById('classe').value.toLowerCase();

    let novaClasse = document.getElementById('novaClasse');
    let novaImagem = document.getElementById('card__personagem');
    let novoTexto = document.getElementById('card__texto');

    if (classe == 'cavaleiro') {
        novaClasse.textContent = 'Cavaleiro'
        novaImagem.src = './assets/Sir Cedric.png'
        novoTexto.textContent = 'Um cavaleiro destemido com armadura reluzente.'
    }   
    
    else if (classe == 'maga'){
        novaClasse.textContent = 'Maga'
        novaImagem.src = './assets/Lady Elanor.png'
        novoTexto.textContent = 'Uma maga poderosa com um cajado encantado.'
    }

    else if (classe == 'ladino'){
        novaClasse.textContent = 'Maga'
        novaImagem.src = './assets/Darius.png'
        novoTexto.textContent = 'Um ladino sorrateiro com adagas afiadas.'
    }

    else if (classe == 'curandeira'){
        novaClasse.textContent = 'Curandeira'
        novaImagem.src = './assets/Aria.png'
        novoTexto.textContent = 'Uma sacerdotisa com um tomo de curas milagrosas.'
    }

    else if (classe == 'barbaro'){
        novaClasse.textContent = 'Curandeira'
        novaImagem.src = './assets/Thorn.png'
        novoTexto.textContent = 'Um guerreiro feroz com um machado de batalha imponente.'
    }

    else if (classe == 'arqueira'){
        novaClasse.textContent = 'Arqueira'
        novaImagem.src = './assets/Luna.png'
        novoTexto.textContent = 'Uma caçadora habilidosa com um arco longo preciso.'
    }

    else if (classe == 'elementista'){
        novaClasse.textContent = 'Elementista'
        novaImagem.src = './assets/Zephyr.png'
        novoTexto.textContent = 'Um conjurador que comanda os elementos da natureza.'
    }

    else if (classe == 'forjador'){
        novaClasse.textContent = 'Forjado'
        novaImagem.src = './assets/Garrick.png'
        novoTexto.textContent = 'Um anão mestre em armas e armaduras.'
    }

    else if (classe == 'vidente'){
        novaClasse.textContent = 'Vidente'
        novaImagem.src = './assets/Myst.png'
        novoTexto.textContent = 'Uma elfa mística com a habilidade de prever o futuro.'
    }

    else if (classe == 'invocador'){
        novaClasse.textContent = 'Invocador'
        novaImagem.src = './assets/Ragnar.png'
        novoTexto.textContent = 'Um feiticeiro que invoca criaturas mágicas para ajudar em batalhas.'
    }

    limeza()
}

function limeza(){
    classe.value = ''
}
