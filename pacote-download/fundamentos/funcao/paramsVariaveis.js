function soma(){
    let soma = 0
    for( i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma( 1, 2, 5 ,3 ,"Teste"))


function soma1(a, b, c){
    a = a
}