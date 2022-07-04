// slider animation start

const headerSliderAnim = () => {
    let headerSlider = new Swiper("#header-slider", {
        loop: true,
        speed: 1000,
        simulateTouch: false,
        direction: "vertical",
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<button class="' + className + '">' + "0" + (index + 1) + "<span class=" + "slider-btn-line" + "></span>" + "</button>";
          },
        },
    });
}

headerSliderAnim()

// slider animation end



// services section animation start

class InterSectionAnimAll {
    constructor(option) {
        this.contents = document.querySelectorAll(option.el)
        this.contentObserve = new IntersectionObserver(this.contentsAnim, {threshold: 0.4})
        this.contents.forEach(element => {
            this.contentObserve.observe(element)                
        });
    }

    contentsAnim(entries) {
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
    const serviceContentAnim = new InterSectionAnimAll({
        el: ".services__content"
    })
} else {
    const serviceContents = [...document.querySelectorAll('.services__content')]
    serviceContents.forEach(content => {
        content.classList.add('active')
    });
}

// services section animation end



// contact section animation start

class InterSectionAnimAsd {
    constructor(option){
        this.animSection = document.querySelector(option.sec)
        this.observed = new IntersectionObserver(this.addActive, {threshold: 0.5})
        this.observed.observe(this.animSection)     
    }

    addActive(entries) {
        if (entries[0].isIntersecting) {
            contactDesc.classList.add('active')
        } else {
            contactDesc.classList.remove('active')
        }
    }
}

if (window.innerWidth > 1024) {
    const contactDescAnim = new InterSectionAnimAsd({
        sec: ".contact__section"
    })

} else {
    contactDesc.classList.add('active')
}

// contact section animation end