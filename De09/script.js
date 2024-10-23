document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelector('.cart-item table tbody');
    const totalField = document.querySelector('.total-price');
    let cart = {};

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const itemElement = button.parentElement;
            const name = itemElement.querySelector('.name-item').textContent;
            const price = parseInt(itemElement.querySelector('.price').textContent);
            const imgSrc = itemElement.querySelector('.img-item').textContent; // Chỗ này giả sử sẽ là link ảnh

            // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
            if (cart[name]) {
                cart[name].quantity++;
            } else {
                // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
                cart[name] = {
                    price: price,
                    quantity: 1,
                    imgSrc: imgSrc // Thêm thông tin ảnh vào
                };
            }

            updateCart(); // Cập nhật giao diện giỏ hàng và tổng tiền
        });
    });

    function updateCart() {
        cartItems.innerHTML = ''; // Xóa nội dung giỏ hàng cũ
        let total = 0;

        for (let item in cart) {
            const itemTotal = cart[item].price * cart[item].quantity;
            total += itemTotal;

            // Tạo HTML cho từng sản phẩm trong giỏ hàng
            const cartItem = document.createElement('tr');
            cartItem.classList.add('item-cart');
            cartItem.innerHTML = `
                <td class="item-info">${item}</td>
                <td class="item-quantity">
                    <input type="number" value="${cart[item].quantity}" min="1">
                </td>
                <td class="price-one">${cart[item].price}</td>
                <td class="item-total-price">${itemTotal}</td>
                <td>
                    <button class="remove-item">×</button>
                </td>
            `;

            // Thay đổi số lượng sản phẩm trong giỏ hàng
            cartItem.querySelector('input').addEventListener('input', (e) => {
                const newQuantity = parseInt(e.target.value);
                if (newQuantity > 0) {
                    cart[item].quantity = newQuantity;
                    updateCart(); // Cập nhật lại giao diện và tổng tiền
                }
            });

            // Xóa sản phẩm khỏi giỏ hàng
            cartItem.querySelector('.remove-item').addEventListener('click', () => {
                delete cart[item];
                updateCart();
            });

            cartItems.appendChild(cartItem);
        }

        // Cập nhật tổng tiền
        totalField.textContent = total;
    }
});
