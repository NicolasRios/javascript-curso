const { reject } = require("lodash")

function gerarNumerosEntre(min, max, numerosProibidos){
    if( min > max )[max , min] = [min, max]
    return new Promise( resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            if(numerosProibidos.includes(aleatorio)) {
                reject('NUmero repetido')
            } else {
                resolve(aleatorio)
            }
        })
    })
}

async function gerarMegaSena(qtdeNumeros){
    try{
        const numeros = []
        for( let _ of Array(qtdeNumeros).fill()){
            numeros.push (await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    }
    catch(e){
        throw "Que chato!!"
    }
}



gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)