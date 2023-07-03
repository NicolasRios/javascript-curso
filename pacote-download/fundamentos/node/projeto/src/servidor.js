const porta = 3003

const bancoDeDados = require('./bancoDados')
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})



app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})