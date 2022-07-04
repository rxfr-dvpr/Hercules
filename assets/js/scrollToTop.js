const scrollAnim = () => {
    const scrollBtn = document.querySelector('.scrollToTop')
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > (body.offsetHeight / 3)) {
            scrollBtn.classList.add('active')
        } else {
            scrollBtn.classList.remove('active')
        }
    })
}

scrollAnim()