let entradas = [];
let entrada;
while(true){
    entrada = prompt("Digite Um nome ou (sair) para finalizar.")
    if (entrada == "sair") {
        break;
    }
    entradas.push(entrada);
} 
let lista = "lista das entradas:\n"

    for (let contador = 0; contador < entradas.length; contador++) {
        lista += `${contador + 1}. ${entradas[contador]}\n`
        
    }
console.log(lista)
for (entrada of entradas) {
    console.log(`Seja bem vindo(a), ${entrada}!`)
}