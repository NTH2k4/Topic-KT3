let sliderOne = document.getElementById("range1");
let sliderTwo = document.getElementById("range2");
let sliderRange = document.querySelector(".slider-range");
let minInput = document.querySelector(".range-min");
let maxInput = document.querySelector(".range-max");

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= 0) {
        sliderOne.value = sliderTwo.value;
    }
    fillColor();
    updateInput();
}

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= 0) {
        sliderTwo.value = sliderOne.value;
    }
    fillColor();
    updateInput();
}

function fillColor() {
    let percent1 = (sliderOne.value / sliderOne.max) * 100;
    let percent2 = (sliderTwo.value / sliderTwo.max) * 100;
    sliderRange.style.left = percent1 + "%";
    sliderRange.style.width = (percent2 - percent1) + "%";
}

function updateInput() {
    minInput.value = formatCurrency((parseInt(sliderOne.value) / 100 * 79600000) + 22900000) + "đ";
    maxInput.value = formatCurrency((parseInt(sliderTwo.value) / 100 * 79600000) + 22900000) + "đ";
}

function formatCurrency(value) {
    return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

document.addEventListener('DOMContentLoaded', function () {
    fillColor();
    updateInput();
});