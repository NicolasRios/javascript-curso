class Pessoa{
    constructor(nome, dataNascimento){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Nicolas')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Patrícia')
p2.falar()

const pessoa = new Pessoa

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '13/05/1993'
})

pessoa.dataNascimento = '04/12/1986'
console.log(pessoa.dataNascimento)


