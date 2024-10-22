function update() {
    let totalPrice = 0;

    // Lặp qua tất cả các hàng trong bảng
    document.querySelectorAll('tbody tr').forEach(row => {
        let priceOne = parseFloat(row.querySelector('.price-one').innerText.replace(',', '').replace('*', ''));
        let quantity = parseInt(row.querySelector('.quantity input').value);
        let sumPrice = priceOne * quantity;

        // Cập nhật giá trị cho .sum trong .sum-price
        row.querySelector('.sum').innerText = sumPrice.toLocaleString('vi-VN');

        // Cộng dồn tổng giá trị
        totalPrice += sumPrice;
    });

    // Cập nhật tổng giá trị cho .total-price trong tfoot
    document.querySelector('.total-price').innerText = totalPrice.toLocaleString('vi-VN');
}
