let scrollAmount = 0;

function getNextFourImgWidth(direction) {
    const imgSlide = document.querySelector('.img-slide');
    const imgs = Array.from(imgSlide.children).filter(child => child.tagName === 'DIV'); // Lọc ra các thẻ div con
    const currentIndex = Math.round(scrollAmount / (imgs[0].offsetWidth + 2)); // Tính chỉ số hiện tại
    let totalWidth = 0;

    if (direction === 'left') {
        // Kiểm tra nếu cuộn trái khi đang ở 4 phần tử đầu
        if (currentIndex === 0) return 0;
        for (let i = 1; i <= 4; i++) {
            if (currentIndex - i >= 0) {
                totalWidth += imgs[currentIndex - i].offsetWidth + 2; // Cộng thêm khoảng cách gap
            }
        }
    } else {
        for (let i = 0; i < 4; i++) {
            if (currentIndex + i < imgs.length) {
                totalWidth += imgs[currentIndex + i].offsetWidth + 2; // Cộng thêm khoảng cách gap
            }
        }
    }
    return totalWidth;
}

function scrollLeftSlide() {
    console.log("Scroll Left Triggered");
    const imgWidth = getNextFourImgWidth('left');
    if (scrollAmount > 0 && imgWidth > 0) {
        scrollAmount -= imgWidth;
        document.querySelector('.img-slide').scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
}

function scrollRightSlide() {
    console.log("Scroll Right Triggered");
    const imgWidth = getNextFourImgWidth('right');
    const maxScroll = document.querySelector('.img-slide').scrollWidth - document.querySelector('.img-slide').clientWidth;
    if (scrollAmount < maxScroll) {
        scrollAmount += imgWidth;
        document.querySelector('.img-slide').scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
}
