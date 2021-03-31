let valorEmDolarTexto = prompt("Qual o valor em dolár que você deseja converter?");
console.log( typeof valorEmDolarTexto);
// string = texto
let valorEmDolarNumero = parseFloat(valorEmDolarTexto);
//parse float é um numero em casas decimais - numero em ponto flutuante.
console.log(typeof valorEmDolarNumero);
//int = numero inteiro 
alert(valorEmDolarNumero);
//aparecer o resultado
let valorEmReal = valorEmDolarNumero * 5.77;

let valorEmRealFixado = valorEmReal.toFixed(2);

alert (valorEmRealFixado);

