let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')    // input#email
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '14%'
email.style.width = '19%'


function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail(){
   let txtEmail = document.querySelector('#txtEmail')
    
   if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'Email Inválido'
    txtEmail.style.color = 'red'
   } else{
    txtEmail.innerHTML = 'Email Válido'
    txtEmail.style.color = 'green'
    emailOk = true
   }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'O Texto é muito grande, digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulario corretamente antes de enviar!')
    }
}

function mapaZoom(){
    mapa.style.width = '700px'
    mapa.style.height = '350px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

function animaFace(){
    face.style.width =  '75px'
    face.style.height = '75px'
}

function normalFace(){
    face.style.width = '50px'
    face.style.height = '50px'
}

function animaInsta(){
    insta.style.width = '75px'
    insta.style.height = '75px'
}

function normalInsta(){
    insta.style.width = '50px'
    insta.style.height = '50px'
}