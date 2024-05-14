// Leva para página Help Center
const linkHelpCenter = document.querySelector('#help-link')
linkHelpCenter.addEventListener('click', () => {
    window.open('../pages/page1.html', '_self')
})

// Leva para outra página (que ainda será criada)
const btnSubmitRequest = document.querySelector('#btn-submit')
btnSubmitRequest.addEventListener('click', () => {
    window.open('../pages/page2.html', '_self')
})

// Leva para outra página (que ainda será criada)
const btnSignIn = document.querySelector('#btn-sign')
btnSignIn.addEventListener('click', () => {
    window.open('../pages/page3.html', '_self')
})