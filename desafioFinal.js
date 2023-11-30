class heroi {
    constructor(nome, idade, tipoHeroi) {
        this.nome = nome
        this.idade = idade
        this.tipoHeroi = tipoHeroi
    }

    atacar() {
        console.log(`Dados do Heroi - Nome ${this.nome} - Idade ${this.idade} - Categoria - ${this.tipoHeroi}`)

        if (this.tipoHeroi === "mago") {
            console.log(`O ${this.tipoHeroi} atacou usando Magia`)
        }

        else if (this.tipoHeroi === "guerreiro") {
            console.log(`O ${this.tipoHeroi} atacou usando a sua Espada`)
        }

        else if (this.tipoHeroi === "monge") {
            console.log(`O ${this.tipoHeroi} atacou usando as Artes Marciais`)
        }

        else if (this.tipoHeroi === "ninja") {
            console.log(`O ${this.tipoHeroi} atacou usando Shuriken`)
        }
    }

}

let heroi1 = new heroi("mago o mago", 52, "mago")
let heroi2 = new heroi("guerreiro verde", 30, "guerreiro")
let heroi3 = new heroi("monge da montanha", 100, "monge")
let heroi4 = new heroi("nanoninja", 50, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()


