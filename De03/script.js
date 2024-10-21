function addToCart(productName, price, imageUrl) {
    const tbody = document.querySelector('table tbody');
    let existingRow = null;

    Array.from(tbody.rows).forEach(row => {
        if (row.cells[0].innerText === productName) {
            existingRow = row;
        }
    });

    if (existingRow) {
        const quantityInput = existingRow.querySelector('.quantity-input');
        quantityInput.value = parseInt(quantityInput.value) + 1;
        const totalPriceCell = existingRow.querySelector('.sum-price');
        totalPriceCell.innerText = `$${(price * quantityInput.value)}`;
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${productName}</td>
            <td>$${price}</td>
            <td><img src="${imageUrl}" alt="${productName}" width="100%"></td>
            <td class=edit-item>
                <input type="number" value="1" min="1" class="quantity-input" onchange="updateTotalPrice(this, ${price})">
                <button class="remove-btn"> x </button>
            </td>
            <td class="sum-price">$${price}</td>
        `;
        tbody.appendChild(row);
        row.querySelector('.remove-btn').addEventListener('click', function() {
            row.remove();
            totalPriceCart();
        });
    }
    totalPriceCart();
}

function updateTotalPrice(input, price) {
    const row = input.closest('tr');
    const totalPriceCell = row.querySelector('.sum-price');
    totalPriceCell.innerText = `$${(price * input.value)}`;
    totalPriceCart();
}

function totalPriceCart() {
    const tbody = document.querySelector('table tbody');
    let total = 0;
    Array.from(tbody.rows).forEach(row => {
        const totalPriceCell = row.querySelector('.sum-price');
        if (totalPriceCell) {
            const price = parseFloat(totalPriceCell.innerText.replace('$', ''));
            total += price;
        }
    });
    console.log(total);
    document.querySelector('.total-price').innerText = `$${total/2}`;
}
