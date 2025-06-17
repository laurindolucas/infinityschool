const idade = prompt("Digite sua idade")
const status1 =  prompt("Digite o status (registrado/nao registrado")
const maioridade = (idade >= 18) ? 'maior de idade' : 'menor idade'


console.log(maioridade)

switch (status1) {
    case "registrado":
        console.log("Olá Seja bem vindo!")
        break;
    case "nao registrado":
        console.log("Olá você ainda não está cadastrado")
    default:
        console.log("Status desconhecido.")
        break;
}

if (idade >= 18 && status1 == "registrado") {
    console.log("acesso completo")
}else{
    console.log("acesso limitado")
}



