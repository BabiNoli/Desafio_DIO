class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    /*atacar() { //usando switch
        let ataque;
        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada";
                break;
            case "mago":
                ataque = "magia";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);
      }*/
      
      atacar() { //usando objeto
        const ataques = {
            guerreiro: "espada",
            mago: "magia",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        let ataque = ataques[this.tipo] || "um ataque desconhecido";
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);
    }
  }
    

let heroi1 = new Heroi("Herculis", 1500, "guerreiro");
let heroi2 = new Heroi("Aang", 16, "mago");
let heroi3 = new Heroi("Buda", 2000, "monge");
let heroi4 = new Heroi("Kai", 22, "ninja");

heroi1.atacar();
heroi2.atacar();      
heroi3.atacar();
heroi4.atacar();