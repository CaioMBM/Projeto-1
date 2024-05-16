// Tela de login 1
function senhaOcultarEsconder(){
    var senhaInput = document.getElementById('ipt-senha')
    var iconOlho   = document.getElementById('icon-olhinho')

    if(senhaInput.type == "password"){
        senhaInput.type = "text"
        iconOlho.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else{
        senhaInput.type = "password"
        iconOlho.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}