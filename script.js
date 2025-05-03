// let i = 1;

// while (i <= 10){
//     console.log(i);
//     i++;
// } 4081

// let num;

// do{
//     num = prompt("Digite um numero negativo para encerrar o loop")

// } while(num >= 0)

// alert("Um número negativo foi inserido")


// let numSecreto = 4;
// let numAdivinhar = 0;

// while(true){
//     numAdivinhar = prompt("digite um numero: ");
//     if(numAdivinhar != numSecreto){
//         alert("tente novamente");
//         continue;
//     }else{
//         alert("parabens você acertou!");
//         break;
//     }
// }

// for(let num = 0; num < 20; num++){
//     if(num  % 3 === 0){
//         continue;
//     }else if (num > 15){
//        break;
//     } 
//     console.log(num);
// }

// const palavra = prompt("Digite uma palavra")

// for(const caractere of palavra){
//     console.log(caractere)
// }


// const array = [1, 2, 4, "inifinity"];

// array[2] = "caio";
// console.log(array);

// const cores = ["Vermelho", "verde", "azul"];


// cores.push("amarelo");
// cores.push("roxo");
// cores.pop();
// cores.splice(1, 1, "laranja", "marrom");

// const novasCores = ["vermelho", "laranja"];
// const coresStrings = cores.join(" , ");
// const novasCoresStrings = novasCores.join(" , ");
// cores.reverse();

// console.log(cores);
// console.log(novasCores);
// console.log(co7vasCoresStrings);

// const numeros = [ 2, 4, 6, 3, 8, 65, 23, 5, 78, 23, 12];

// numeros.sort((a,b) => a-b);

// console.log("números ordenados: ", numeros)
// console.log("maior número: ", numeros[0])
// console.log("menor número: ", numeros[numeros.length -1]);


// const comDuplicatas = ["caio", "caio", "lucas", "luan", "sergio"];
// console.log(comDuplicatas)
// for (const semDuplicatas of comDuplicatas) {
//     console.log(semDuplicatas) 

// }


// ========== aula de função 05/04================
// function olaMundo(){
//     console.log("Hello World");
// }

// olaMundo()

// const nome = "caio";

// function saudacao(nome){
//     console.log("Olá, " + nome + " " + "seja bem vindo!");
// }

// saudacao(nome);


// function formatarValor(valor){
//     const valorFormatado = new Intl.NumberFormat(
//         "pt-BR", { style: "currency", currency:"BRL"}
//     ).format(valor)
//     return valorFormatado
// }


// function calcularDesconto (preco, desconto){
//     const valorDesconto = preco * (desconto / 100)
//     const precoFinal = preco - valorDesconto
//     console.log(`o preço final com desconto é de R$:${formatarValor(precoFinal)}`);
// }
// calcularDesconto(100, 85)

// const filtrarPares = (arrayDeNumeros) => {
//     let numerosPares = [];
//     for (const numero of arrayDeNumeros) {
//         if (numero % 2 === 0) {
//             numerosPares.push(numero);
//         }
//     }
//     return numerosPares;
// };

// // Exemplo de uso:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log( filtrarPares(array)); 


//==================== aula de metodos avançado de array 12/04======================================
// const numbers = [1, 2, 3, 4, 5 ];

// numbers.forEach((number, index) => {
//     console,console.log("O elemento no indice " + index + " " + "é " + number);
// });


// const numeros = [1, 2, 4, 6, 10, 0, -2, -32, 22, 70, 0, -65];

// numeros.forEach((numero) => {
//     if(numero > 0){
//         console.log(` o numero: ${numero} é positivo`);
//     } else if(numero < 0 ){
//         console.log(`o numero: ${numero} é negativo`);
//     }else{
//         console.log(`o numero é zero`);
//     }
// })

// const numbers = [1, 2, 3, 4, 5];

// const quadrados = numbers.map((num) => num * num)
// console.log(numbers);
// console.log(quadrados)


// const precos = [129.20, 49.99, 250.00];
// const valoresFormatados = precos.map(valor =>{
//     return new Intl.NumberFormat(
//         "pt-BR", { style: "currency", currency: "BRL"
//         }
//     ).format(valor)
// })

// console.log(valoresFormatados)

// const temperaturasCelsius = [22.5, 25.0, 18.3, 30.1, 15.6, 28.4, 21.7];

// const temperaturasFahrenheit = temperaturasCelsius.map((temperatura) => (temperatura * 1.8 + 32).toFixed(2))
// console.log(temperaturasFahrenheit)

// const numeros = [1, 2, 4, 5, 6, 7, 8, 10, 32];
// const pares = numeros.filter(num => num % 2 ===0 )
// console;console.log((pares));


//  const nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda", "Felipe", "Gabriela"];


// const nomesComA = nomes.filter(nome => nome.includes("a") )
// console.log(nomes)
// console.log(nomesComA)


// numeros  = [1,2,3,4,5, 2, 3, 5, 10, 9]




// console.log(livro)


// const exibirDetalhesFilme = ({ titulo, diretor, ...detalhes}) => {
//     console.log(`titulo: ${titulo}`);
//     console.log(`diretor: ${diretor}`);
//     console.log(`detalhes: ${detalhes}`);
// };

// const filme = {
//     titulo : "inception",
//     diretor : "nolan",
//     ano : 2010,
//     duracao: "140 minutos"
// };

// exibirDetalhesFilme(filme)


// bd = []



// function adcionarLivro() {
//     const novoLivro = {
//         titulo : prompt("Digite o nome do livro:"),
//         autor : prompt("Digite o autor:"),
//         id : prompt("Digite o id do livro: 111"),
//         ano : parseInt(prompt("Digite o ano:")),
//         editora : prompt("Digite a editora:"),
//         disponivel : true
//     };
//     bd.push(novoLivro)
//     alert("Livro adcionado com sucesso")
// }


// function listarLivros(){
//     for (const livro of bd){
//         alert(livro.titulo)
//     }
// }

// function buscarlivro(){

// }

// function emprestimoLivro(){

// }

// function devolucaoLivro(){

// }
// function excluirLivro(){
//     nomeLivro = prompt("Qual o nome do livro que você deseja exlcuir ? ")
    
// }




//     console.log("============ BIBLIOTECA CENTRAL ============")
//     console.log("----------- MENU -----------")
//     console.log("1- Adicionar livro")
//     console.log("2- Buscar livro")
//     console.log("3- Pegar livro emprestado")
//     console.log("4- Devolver livro")
//     console.log("5- Excluir livro")

//     escolha = parseInt(prompt("digite o número correspondente a sua escolha"))

//     switch (escolha) {
//         case 1:
//             adcionarLivro();
//             break;
//         case 2:
//             buscarlivro();
//             break;
//         case 3:
//             emprestimoLivro();
//             break;
//         case 4: 
//             devolucaoLivro();
//             break;
//         case 5:
//             excluirLivro();
//             break;
//         default:
//             console.log("Esolha não reconhecida");
//     }
// adcionarLivro();
// listarLivros();


// const bancoDeDados = [
//     {
//         id: 1,
//         produto: "notebook",
//         preco: 3000.00,
//         quantidade: 3,
//         categoria: "eletronicos",
//         data: "2025-05-02"
//     },
//     {
//         id: 2,
//         produto: "livro de programação",
//         preco: 150.00,
//         quantidade: 10,
//         categoria: "livros",
//         data: "2025-05-01"
//     },
//     {
//         id: 3,
//         produto: "cadeira gamer",
//         preco: 800.00,
//         quantidade: 2,
//         categoria: "moveis",
//         data: "2025-04-30"
//     },
//     {
//         id: 4,
//         produto: "camiseta tecnológica",
//         preco: 500.00,
//         quantidade: 5,
//         categoria: "vestuario",
//         data: "2025-05-02"
//     },
//     {
//         id: 5,
//         produto: "smartphone",
//         preco: 2500.00,
//         quantidade: 4,
//         categoria: "eletronicos",
//         data: "2025-05-01"
//     },
//     {
//         id: 6,
//         produto: "mesa de escritório",
//         preco: 1200.00,
//         quantidade: 1,
//         categoria: "moveis",
//         data: "2025-04-29"
//     },
//     {
//         id: 7,
//         produto: "mouse sem fio",
//         preco: 200.00,
//         quantidade: 8,
//         categoria: "eletronicos",
//         data: "2025-05-03"
//     },
//     {
//         id: 8,
//         produto: "tênis esportivo",
//         preco: 350.00,
//         quantidade: 6,
//         categoria: "vestuario",
//         data: "2025-05-01"
//     },
//     {
//         id: 9,
//         produto: "tablet",
//         preco: 1800.00,
//         quantidade: 3,
//         categoria: "eletronicos",
//         data: "2025-05-02"
//     },
//     {
//         id: 10,
//         produto: "mochila impermeável",
//         preco: 250.00,
//         quantidade: 7,
//         categoria: "acessorios",
//         data: "2025-04-28"
//     }
// ];


// const filtarCategoria = bancoDeDados.filter((categoria) =>{

// }
// )

// function valorTotal(){
//     escolhaVenda = prompt("Qual venda você deseja somar?")
//     if(escolhaVenda == bancoDeDados){
//         soma = preco * quantidade;
//         console.log(soma)
//     }
// }


// while(true){
//     console.log("========= o que você deseja fazer? =========")
//     console.log(" 1- Calcular Valor total de cada venda")
//     console.log(" 2- Filtrar vendas de uma certa categoria")
//     console.log(" 3- Calcular Valor total de cada venda de certa categoria")
//     console.log(" 4- Listar o produto mais vendido")
//     console.log(" 5- Agrupar vendas por mês")
//     console.log(" 6- Ordenar vendas pot atributo(preço/quantidade/data)")
//     console.log(" 7- Calcular a média de preços de todos os produtos")
// }

// escolha = parseInt(prompt("digite o número correspondente a sua escolha"))

// switch (escolha) 
// {
//     case 1:
//         valorTotal();
//         break;
// }