function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.15,
    };
}


console.log(criarProduto('Notebook', 2199,99))
console.log(criarProduto('Iphone', 8525,99))


