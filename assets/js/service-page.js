class InterSection {
    constructor(option) {
        this.contents = document.querySelectorAll(option.el)
        this.observed = new IntersectionObserver(this.addActive)
        this.contents.forEach(content => {
            this.observed.observe(content)
        });
    }

    addActive(entries) {
        entries.forEach(entrie => {
            if (entrie.isIntersecting) {
                entrie.target.classList.add('active')   
            } else {
                entrie.target.classList.remove('active')   
            }
        });
    }
}

if (window.innerWidth > 1024) {
    const serviceCategories = new InterSection({
        el: ".service__category-item"
    })
} else {
    const serviceContents = document.querySelectorAll('.service__category-item')
    serviceContents.forEach(content => {
        content.classList.add('active')
    })   
}