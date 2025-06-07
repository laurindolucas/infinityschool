// fetch('https://jsonplaceholder.typicode.com/users') 
//     .then(response => response.json())
//     .then(users =>
//     {
//         for (const user of users) {
//             console.log(user.address)
//         }
//     })
//     .catch(error => console.error("Erro: " ))
const cep = document.getElementById("cep");

const button = document.getElementById('btnCep');
button.addEventListener('click', async function consultarCep() {
    try {
        const consulta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
        const resposta = await consulta.json();
        console.log(resposta);
    }catch (erro){
        console.error('Erro:', erro);
    } 
})