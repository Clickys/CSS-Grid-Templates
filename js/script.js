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
        this.i += 1;
        return this.i;
    }
};

function changeImg() {
    debugger;
    let imgSrc = document.getElementsByClassName('slider-section__img')[0];
    imgSrc.setAttribute('src', slider.imgArray[slider.i]);
    if (slider.i < slider.imgArray.length - 1) {
        slider.i++;
    } else {
        slider.i = 0;
    }
    setTimeout(changeImg, slider.timer);
}


function nextImg() {
    let slideshow = document.getElementsByClassName('slideshow')[0];
    slideshow.setAttribute('src', slider.imgArray[slider.next()]);
    if (slider.i < slider.imgArray.length) {
        slider.i++;
    } else {
        slider.i = 0;
    }
}

//document.getElementById('next').addEventListener('click', nextImg);

window.addEventListener('load', changeImg);
