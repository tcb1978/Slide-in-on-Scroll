function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(slideImage => {
        // how far is window being scrolled down from bottom of the viewport?
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // where is bottom of image?
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

    })
}

window.addEventListener('scroll', debounce(checkSlide, 500));