function delete_item(event) {
    var button = event.target;
    while (button && button.tagName !== 'TR') {
        button = button.parentElement;
    }
    if (button && button.parentElement) {
        button.parentElement.removeChild(button);
    }
}

function Valid() {
    var input = document.querySelector('.quantity');
    if (input.value <= 0) {
        alert('Giá trị không thể giảm xuống dưới 1!');
        input.value = 1;
    }
}