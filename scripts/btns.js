import { infoHeroi } from "./info.js";
import { classificacao } from "./classificacao.js";
import { nivelHeroi } from "./nivel.js";
import { limpaCampo, limpaCard } from "./limparCampo.js";
import { persImgBio } from "./personagem.js";


function infoGeral(){
    infoHeroi()
    classificacao()
    nivelHeroi()
    limpaCampo()  
    persImgBio()  
}

function limpaGeral(){
    limpaCampo()
    limpaCard()
    
}

const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', infoGeral);

let btnLimpar = document.getElementById('limpar');
btnLimpar.addEventListener('click', limpaGeral);