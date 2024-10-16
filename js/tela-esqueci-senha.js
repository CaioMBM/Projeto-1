// Ao clicar no submit - VALIDAR
function validarEmail(){
    var email                = document.getElementById('ipt-email').value
    const modalEmailInvalido = document.getElementById('email-invalido')
    
    // Email válido
    if (email == "caio@gmail.com"){
        // Redireciona
        location.href = "construcao.html";
    }
    // Email inválido
    else{
        modalEmailInvalido.style.display = "block";
    }
}