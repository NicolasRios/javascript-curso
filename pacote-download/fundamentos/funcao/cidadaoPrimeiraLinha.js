//criar de forma literal
function fun1() {}

//armazenar em uma variável
const fun2 = function () {};

//Armazenar dentro de um array
const array = [
    function (a, b) {
        return a + b;
    },
    fun1,
    fun2,
];

//Atribuindo a um atributo de um objeto
const obj = {};

obj.falar = function () {
    return "Opa";
};

console.log(obj.falar());

//passando como parametro de uma outra função
function run(fun ){
    fun()
}

run( function(){ console.log('Executando...')})