let btnModo = document.getElementById('modo');
let fundoInp = document.querySelectorAll('input');
let fundoBtn = document.querySelectorAll('.input__btn_estilo');
let corSpan = document.querySelectorAll('span');

function modoClaroEscuro() {

    if (btnModo.textContent == 'Modo Claro') {
        document.body.style.background = '#FFFFFF'
        btnModo.textContent = 'Modo Escuro'
        document.querySelector('.container__input').style.background = '#16A34A'
        btnModo.style.color = '#262626'
        document.querySelector('.container_card').style.background = '#16A34A'
        document.querySelector('.card__nome').style.borderBottom = '1px solid #000000'
        document.getElementById('card__texto').style.color = '#000000'
        


        fundoInp.forEach(element => {
            element.style.background = '#FFFFFF' 
            element.style.color = '#000000 '
        });

        corSpan.forEach(element => {
            element.style.color = '#000000'
        })

        fundoBtn.forEach(element => {
            element.style.background = '#262626';
        })

    }

    else if (btnModo.textContent == 'Modo Escuro') {
        document.body.style.background = '#181818'
        btnModo.textContent = 'Modo Claro'
        document.querySelector('.container__input').style.background = '#262626'
        btnModo.style.color = '#FFFFFF'
        document.querySelector('.container_card').style.background = '#262626'
        document.querySelector('.card__nome').style.borderBottom = '1px solid #16A34A'
        document.getElementById('card__texto').style.color = '#FFFFFF'

        fundoInp.forEach(element => {
            element.style.background = '#363636'
            element.style.color = '#FFFFFF'
        });
    
        corSpan.forEach(element => {
            element.style.color = '#16A34A'
        })

        fundoBtn.forEach(element => {
            element.style.background = '#16A34A';
        })


    }
}

btnModo.addEventListener('click', modoClaroEscuro);