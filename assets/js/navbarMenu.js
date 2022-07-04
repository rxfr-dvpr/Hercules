// nav hamburger

const menuBtn = document.querySelector('.menu__btn'),
    navbarCollapse = document.querySelector('.navbar__collapse')

menuBtn.addEventListener('click', function () {
    this.classList.toggle('active')
    navbarCollapse.classList.toggle('opened')
    body.classList.toggle('freezed')
})

navbarCollapse.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        menuBtn.classList.toggle('active')
        this.classList.toggle('opened')
        body.classList.toggle('freezed')
    }
})


// nav Fixed

const navFixed = () => {
    const nav = document.querySelector('.header__nav')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            nav.classList.add('fixed')
        } else {
            nav.classList.remove('fixed')
        }
    })
}

navFixed()