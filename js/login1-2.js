// Ocultar ou mostrar senha
function senhaOcultarEsconder(){
    var senhaInput = document.getElementById('ipt-senha')
    var iconOlho   = document.getElementById('icon-olhinho')

    // Exibir senha
    if(senhaInput.type == "password"){
        senhaInput.type = "text"
        iconOlho.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } 
    // Ocultar senha
    else{
        senhaInput.type = "password"
        iconOlho.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}



// Validação do login e leva para a index.html
function validarEmailSenha(){
    var email = document.getElementById('ipt-email').value
    var senha = document.getElementById('ipt-senha').value

    // Email e Senha corretos 
    if(email == "caio@gmail.com" && senha == "1234"){
        location.href = "../index.html"
        // Outra forma de redirecionar:
        // window.open('../index.html', '_self')
    }
    // Email e(ou) Senha incorreto
    else{
        alert('Email or password wrongs')
    }
}
