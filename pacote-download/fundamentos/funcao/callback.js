const fabricantes = ["Mercedes", "BMW", "Audi"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);

function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0;

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    };

    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
}

const gol = new Carro();
gol.acelerar();
console.log(gol.getVelocidadeAtual());

const lamborguini = new Carro(350, 280);
lamborguini.acelerar();
lamborguini.acelerar();
lamborguini.acelerar();

console.log(lamborguini.getVelocidadeAtual());

