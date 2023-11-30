let nivelHeroi = "10001"

let nome = "Hero"

if (nivelHeroi === "1000") {
    console.log("O Heroi de nome " + nome + " está no nível de Ferro " + nivelHeroi + " de XP")
}

else if ((nivelHeroi === "1001") || (nivelHeroi === "2000")) {
    console.log("O Heroi de nome " + nome + " está no nível de Bronze " + nivelHeroi + " de XP")
}

else if ((nivelHeroi === "2001") || (nivelHeroi === "5000")) {
    console.log("O Heroi de nome " + nome + " está no nível de Prata " + nivelHeroi + " de XP")
}

else if ((nivelHeroi === "6000") || (nivelHeroi === "7000")) {
    console.log("O Heroi de nome " + nome + " está no nível de Ouro " + nivelHeroi + " de XP")
}

else if ((nivelHeroi === "7001") || (nivelHeroi === "8000")) {
    console.log("O Heroi de nome " + nome + " está no nível de Platina " + nivelHeroi + " de XP")
}

else if ((nivelHeroi === "8001") || (nivelHeroi === "9000")) {
    console.log("O Heroi de nome " + nome + " está no nível de Ascendente " + nivelHeroi + " de XP")
}

else if ((nivelHeroi === "9001") || (nivelHeroi === "10000")) {
    console.log("O Heroi de nome " + nome + " está no nível de Imortal " + nivelHeroi + " de XP")
}

else if (nivelHeroi >= "10001") {
    console.log("O Heroi de nome " + nome + " está no nível de Radiante " + nivelHeroi + " de XP")
}
