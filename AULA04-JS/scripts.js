let lista = ["arroz", "feijão", "macarrão"];
let opcao;
let entrada;

console.log(lista)

while(true){
    opcao = prompt(
        "Lista de compras:\n" +
        "1- Adicionar item\n" +
        "2- Remover item\n"+
        "3- Atualizar item\n" +
        "4- Exibir itens\n" +
        "5- sair"
    );
    switch(opcao){
        case "1":
            entrada = prompt("Digite o nome do item que deseja adicionar")
            lista.push(entrada);
            alert(lista)
            break;
        case "2":
            let indiceRemover = Number(prompt("Digite o índice para remover:"));
            lista.splice(indiceRemover, 1);
            break
        case "3":
            let indiceAtualizar = Number(prompt("Índice do item a atualizar:"));
            let novoValor = prompt("Novo valor:");
            lista[indiceAtualizar] = novoValor;
            break;
        case "4":
            let exibicao = "Itens da lista:\n"
            let contador = 0;
            for (entrada of lista) {
                exibicao += (`${contador} : ${entrada} \n`)
                contador ++;
            }
            alert(exibicao)
            break;
        case "5":
            alert("até logo")
            break;
            }
        if (opcao === "5") break;

}