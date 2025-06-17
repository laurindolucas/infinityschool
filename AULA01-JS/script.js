let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

const soma = num1 + num2;
const subtracao = num1 - num2;
const multi = num1 * num2;
const divisao =  num1 / num2;
const resto =  num1 % num2;

console.log(`A soma de ${num1} e ${num2} é igual a: ${soma}`)
console.log(`A subtração de ${num1} e ${num2} é igual a:  ${subtracao} `)
console.log(`A Multiplicação de ${num1} e ${num2} é igual a:  ${multi}`)
console.log(`A divisão de ${num1} e ${num2} é igual a:  ${divisao}`)
console.log(`o resto de ${num1} e ${num2} é igual a:  ${resto}`)


let resultado = num1;
resultado += num2;
console.log(`Usando += : ${resultado}`);
resultado -= num2;
console.log(`Usando -= : ${resultado}`);
resultado *= num2;
console.log(`Usando *= : ${resultado}`);
resultado /= num2;
console.log(`Usando /= : ${resultado}`);
resultado %= num2;
console.log(`Usando %= : ${resultado}`);