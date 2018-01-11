/*jshint esversion: 6 */

let slider = {
    timer: 5000,
    i: 0,
    imgArray: ['/img/slider/dog-1.png','/img/slider/dog-2.png','/img/slider/dog-food-1.png'],
    next: function() {
        this.i += 1;
        return this.i;
    },
    prev: function() {
        this.i -= 1;
        return this.i;
    }
};

function changeImg() {

    let sliderSection = document.getElementsByClassName('slider-section__img--slider')[0];
    sliderSection.setAttribute('src', slider.imgArray[slider.i]);
    console.log(slider.i, 'auto');
    if (slider.i < slider.imgArray.length - 1) {
        slider.i++;
    } else {
        slider.i = 0;
    }
    setTimeout(changeImg, slider.timer);
}


function nextImg() {
    let sliderSection = document.getElementsByClassName('slider-section__img--slider')[0];
    if (slider.i < slider.imgArray.length - 1 ) {
        sliderSection.setAttribute('src', slider.imgArray[slider.i++]);
    } else {
        sliderSection.setAttribute('src', slider.imgArray[slider.i]);
        slider.i = 0;
    }
}

let nextEl = document.getElementsByClassName('aside-left')[0];
nextEl.addEventListener('click', nextImg);
window.addEventListener('load', changeImg);
