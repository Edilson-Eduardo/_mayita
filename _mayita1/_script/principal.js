//Criando a função para mudar a imagem de destaque
let imagem = document.querySelector('.destaque')
function mudarFoto(){
    if(imagem.getAttribute('src') !== '_imagens/destaque2.jpg')
        imagem.setAttribute('src','_imagens/destaque2.jpg')
    else
        imagem.setAttribute('src','_imagens/destaque.jpg')
}
setInterval(mudarFoto,5000)

//Criando a função para tocar o som de fundo
let audio = document.querySelector('audio')
let botaoSom = document.querySelector('fieldset#som img')
let span = document.querySelector('fieldset#som span')
botaoSom.addEventListener('click',function (){
    if(botaoSom.getAttribute('src') == '_imagens/som-off.png'){
        botaoSom.setAttribute('src','_imagens/som-on.png')
        span.innerHTML = 'On'
        audio.play()
    }
    else{
        botaoSom.setAttribute('src','_imagens/som-off.png')
        span.innerHTML = 'Off'
        audio.pause()
    }
})

//Criando a função para mudar a página
let home = document.querySelector('li#home')
let project = document.querySelector('li#projectos')
let info = document.querySelector('li#info')
let menu = document.querySelector('.menu')
var endereco
home.addEventListener('click',function(){endereco = 'index.html'})
project.addEventListener('click',function(){endereco = 'projectos.html'})
info.addEventListener('click',function(){endereco = 'informacoes.html'})
function mudarPagina(){
    window.location.href = endereco
}
menu.addEventListener('click',mudarPagina)

//Criando a função para adicionar produto
let produto = document.querySelector('#nome')
let quantidade = document.querySelector('#qtt')
let addBotao = document.querySelector('#add')
let guardado = document.querySelector('#guardado')

addBotao.addEventListener('click',verificar)
produto.addEventListener('keypress',function (e){if(e.key == "Enter")verificar()})
quantidade.addEventListener('keypress',function (e){if(e.key == "Enter")verificar()})

function verificar(){
    if(produto.value.trim() !== "" && quantidade.value.trim() !== "")
    addProduto()
}
function addProduto(){
    let nomeProduto = produto.value 
    let novoProduto = document.createElement('li')
    novoProduto.innerHTML = `<div class="contexto"><span>i</span><option class="excluir">Excluir</option></div>${nomeProduto}`
    guardado.appendChild(novoProduto)
    produto.value = ''
    quantidade.value = ''
}

guardado.addEventListener('click',function (e){
    if(e.target.classList.contains('excluir')){
        e.target.parentElement.parentElement.remove()
    }
})

//Função para os contactos do programador
var mensagem = document.querySelector('#mensagem')
var select = document.querySelector('select')

mensagem.addEventListener('keypress', function (e){
    if(e.key == "Enter")
    enviarEmail()
})
function enviarEmail(){
    if(mensagem.value.trim() !== "")
    window.location.href = `mailto:edilson.twenty7eduardo@gmail.com?cc=edilson.twenty7eduardo@gmail.com&subject=${mensagem.value}`
}

if(select.value == "fb")
    window.location.href = "https://facebook.com/edilsonvita"
else if(select.value == "inst")
    window.location.href = "https://instagram.com/edilsonvita"
else
window.location.href = "https://whatsapp.com/946456941"

