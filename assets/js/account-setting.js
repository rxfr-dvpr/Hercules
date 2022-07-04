const accountContent = () => {
    const resetPasswordBtn = document.querySelector('.reset-password-btn'),
        enterContactContent = document.querySelector('.enter-contact__content'),
        enterCodeContent = document.querySelector('.enter-code__content'),
        submitCodeBtn = document.querySelector('.submit-code-btn'),
        resetPasswordContent = document.querySelector('.reset-password__content'),
        successContent = document.querySelector('.success__content'),
        changePasswordBtn = document.querySelector('.change-password-btn');
        
    resetPasswordBtn.addEventListener('click', function (e) {
        e.preventDefault()
        enterCodeContent.classList.toggle('active')
        enterContactContent.classList.toggle("hidden")
    })
    
    submitCodeBtn.addEventListener('click', function (e) {
        e.preventDefault()
        enterCodeContent.classList.toggle('active')
        resetPasswordContent.classList.toggle('active')
    })
    
    changePasswordBtn.addEventListener('click', function (e) {
        e.preventDefault()
        resetPasswordContent.classList.remove('active')
        successContent.classList.toggle('active')
    })
}

accountContent()