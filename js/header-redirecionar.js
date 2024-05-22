// TELA - index.html
// Leva para página do SUBMIT
const btnSubmitRequest = document.querySelector('#btn-submit')
btnSubmitRequest.addEventListener('click', () => {
    window.open('pages/construcao.html', '_self')
})

// Leva para página para LOGAR
const btnSignIn = document.querySelector('#btn-sign')
btnSignIn.addEventListener('click', () => {
    window.open('pages/login1.html', '_self')
})


// TELA - suporte.html
// Leva para página do SUBMIT
function buttonSubmitRequest(){
    location.href = 'suporte.html'
    
    console.log('clicou submit')
}

// Leva para página para LOGAR
function buttonSignIn(){
    location.href = 'login1.html'
    
    console.log('clicou login')
}
