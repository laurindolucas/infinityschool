const cep = document.getElementById("buscarCep");
const buttonBusca = document.getElementById("bntBuscarCep");

const  titulocep = document.getElementById("cepLocalizacao")
const  titulologradouro = document.getElementById("lagradouroLocalizacao")
const  titulobairro = document.getElementById("bairroLocalizacao")
const  titulocidade = document.getElementById("cidadeLocalizacao")
const  tituloestado = document.getElementById("estadoLocalizacao")

const exibircep = document.getElementById("valorcep")
const exibirlogradouro = document.getElementById("valorlogradouro")
const exibirbairro = document.getElementById("valorbairro")
const exibircidade = document.getElementById("valorcidade")
const exibirestado = document.getElementById("valorestado")



buttonBusca.addEventListener('click', async function consultaCep() {
    try{
        const consulta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        const resposta = await consulta.json()

        const dadosCep = resposta.cep
        const dadosLogradouro = resposta.dadoslogradouro
        const dadosBairro = resposta.bairro
        const dadosCidade = resposta.localidade
        const dadosEstados = resposta.estado 

        exibircep.innerText = dadosCep
        exibirlogradouro.innerText = dadosLogradouro
        exibirbairro.innerText = dadosBairro
        exibircidade.innerText = dadosCidade
        exibirestado.innerText = dadosEstados


        console.log(resposta)
    }catch(erro){
        console.erro("erro:", erro)
    }
})
