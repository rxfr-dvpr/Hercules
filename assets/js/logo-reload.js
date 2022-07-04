const logoReload = () => {
    const logo = document.querySelector('.logo-reload')
    
    logo.addEventListener('click', () => {
        location.reload()
    })
}

logoReload()