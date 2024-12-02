let indexItem = 0;

function showItem() {
    const items = document.querySelectorAll('.slide-item .item');
    items.forEach((item, index) => {
    	if (index > 1) {
    		item.style.display = "none";
    	}
    });
}

function turn_left() {
    const items = document.querySelectorAll('.slide-item .item');
    if (indexItem == 0 || items.length < 2) return;
    items[indexItem + 1].style.display = 'none';
    items[indexItem - 1].style.display = 'flex';
    indexItem--;
}

function turn_right() {
    const items = document.querySelectorAll('.slide-item .item');
    if (indexItem == items.length - 2 || items.length < 2) return;
    items[indexItem].style.display = 'none';
    items[indexItem + 2].style.display = 'flex';
    indexItem++;
}

showItem();

function update_price() {
	const quantity = document.querySelector('.choose-quantity select');
	const priceThis = document.querySelector('.price-this .price');
	const priceOnce = document.querySelector('.price-once');
	const priceNoCupon = document.querySelector('.price-no-cupon');
	const totalPrice = document.querySelector('.total-price');

    const priceValue = priceOnce.textContent.replace(/\./g, '').replace(' VND', '');
    const price = parseInt(priceValue);

	const quan = parseInt(quantity.value); // Fixed typo: quantity.Value to quantity.value
    const val = quan * price;

    priceThis.textContent = `${val.toLocaleString()} VND`;
    priceNoCupon.textContent = `${val.toLocaleString()} VND`; // Fixed typo: toLocateString to toLocaleString
    totalPrice.textContent = `${val.toLocaleString()} VND`; // Fixed typo: toLocateString to toLocaleString
}

function apply_cupon() {
    const cuponInput = document.querySelector('.input-cupon');
    if (cuponInput.value.trim() === '') {
        return;
    }
    const discount = document.querySelector('.discount-upon');
    const priceNoCupon = document.querySelector('.price-no-cupon');
    const totalPrice = document.querySelector('.total-price');

    const temp = priceNoCupon.textContent.replace(/\./g, '').replace(' VND', '');
    const val = parseInt(temp) / 2;
    discount.textContent = `${val.toLocaleString()} VND`;
    totalPrice.textContent = `${val.toLocaleString()} VND`;

}
