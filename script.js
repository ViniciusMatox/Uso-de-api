async function buscaEndereco(cep) {
    var mensagemDeErro = document.getElementById('erro')
    mensagemDeErro.innerHTML = ''
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json()
        if (consultaCepConvertida.erro) {
            throw Error('CEP nãoexistente');
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')
        
        cidade.value = consultaCepConvertida.localidade
        logradouro.value = consultaCepConvertida.logradouro
        estado.value = consultaCepConvertida.uf
        bairro.value = consultaCepConvertida.bairro
        
        console.log(consultaCepConvertida)
        return consultaCepConvertida

    } catch (erro) {
        mensagemDeErro.innerHTML = `<p>CEP invalido, tente novamente</p>`
        console.log(erro)

    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => {
    buscaEndereco(cep.value)
})
console.log(cep)