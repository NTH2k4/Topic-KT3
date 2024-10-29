function load() {
    document.getElementById('signin').style.display = 'none';
    document.getElementById('txtaccount').value = '';
}
function show() {
    let check = document.getElementById('signin');
    if (check.style.display == 'none') {
        check.style.display = 'block';
    }
    else {
        check.style.display = 'none';
    }
}
function signin() {
    document.getElementById('account').innerHTML = document.getElementById('txtaccount').value;
    document.getElementById('signin').style.display = 'none';
}
var img = [
    'img/banner.jpg',
    'img/img1.png',
    'img/img2.png',
    'img/img3.png'
]
var count = 0;
function slide() {
    if (count < img.length - 1) {
        count++;
    }
    else {
        count = 0;
    }
    document.getElementById('banner').setAttribute('src', img[count]);
}
setInterval(slide, 1000);