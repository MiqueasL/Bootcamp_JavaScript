let ranking = vitoriasDerrotas(100,10)


function vitoriasDerrotas(vitoria, derrota){
    ganho = vitoria
    resultado = vitoria - derrota
    return resultado    
}

if (ranking  <=10){
    console.log(`O heroi tem ${ganho} vitorias e está no nivel ${ranking} Ferro`)
}

else if (ranking === 11 || ranking <= 20){
    console.log(`O heroi tem ${ganho} vitorias e está no nivel ${ranking} Bronze`)
}

else if (ranking === 21 || ranking <=50){
    console.log(`O heroi tem ${ganho} vitorias e está no nivel ${ranking} Prata`)
}

else if (ranking === 51 || ranking <= 80){
    console.log(`O heroi tem ${ganho} vitorias e está no nivel ${ranking} Ouro`)
}

else if (ranking === 81 || ranking <= 90){
    console.log(`O heroi tem ${ganho} vitorias e está no nivel ${ranking} Diamante`)
}

else if (ranking === 91 || ranking <=100){
    console.log(`O heroi tem ${ganho} vitorias e está no nivel ${ranking} Lendário`)
}

else {
    console.log(`O heroi tem ${ganho} vitorias e está no nivel ${ranking} Imortal`)
}