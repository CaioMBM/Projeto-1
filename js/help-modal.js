const modal       = document.getElementById('help-modal');
const abrirModal  = document.getElementById('btn-help');
const fecharModal = document.getElementById('btn-fechar-modal')


// Abrir o modal
abrirModal.addEventListener("click", function(){
    modal.style.display = "block";
    abrirModal.style.display = "none";
});

// Fechar o modal
fecharModal.addEventListener("click", function(){
    modal.style.display = "none";
    abrirModal.style.display = "block";
});
