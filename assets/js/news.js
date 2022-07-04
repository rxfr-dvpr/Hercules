const liveData = () => {
    let date = new Date(),
        curDay = date.getDate(),
        curMonth = date.getMonth() + 1,
        curYear = date.getFullYear(),
        dayNum = document.querySelectorAll('.day-num'),
        monthNum = document.querySelectorAll('.month-num'),
        yearNum = document.querySelectorAll('.year-num')
    curDay < 10 ? dayNum.forEach(day => day.innerHTML = `0${curDay}`) : dayNum.forEach(day => day.innerHTML = curDay) 
    curMonth < 10 ? monthNum.forEach(month => month.innerHTML = `0${curMonth}`) : monthNum.forEach(month => month.innerHTML = curMonth) 
    yearNum.forEach(year => year.innerHTML = curYear)
}

liveData()

const swiper = new Swiper('#news-slider', {
    spaceBetween: 20,
    simulateTouch: false,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        },
        1400: {
            slidesPerView: 6
        }

    }
});