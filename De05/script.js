function reload() {
    let totalPrice = 0;

    // Lặp qua tất cả các hàng trong bảng
    document.querySelectorAll('tbody tr').forEach(row => {
        let price = parseFloat(row.querySelector('.price').innerText.replace(/\./g, '').replace(' đ', ''));
        let quantity = parseInt(row.querySelector('.quantity input').value);
        let total = price * quantity;

        // Cập nhật giá trị cho .total
        row.querySelector('.total').innerText = total.toLocaleString('de-DE') + ' đ';

        // Cộng dồn tổng giá trị
        totalPrice += total;
    });

    // Cập nhật tổng giá trị cho .total-price
    document.querySelector('.total-price p').innerText = 'Tổng cộng: ' + totalPrice.toLocaleString('de-DE') + ' đ';
}
