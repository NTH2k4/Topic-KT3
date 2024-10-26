document.addEventListener('DOMContentLoaded', () => {
    function updateTotals() {
        let totalPrice = 0;
        let needToPay = 0;

        document.querySelectorAll('.item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity .value').value, 10);
            const specialPrice = parseFloat(item.querySelector('.special-price').textContent.replace(/\D/g, '')) * quantity;
            const originalPrice = parseFloat(item.querySelector('.original-price').textContent.replace(/\D/g, '')) * quantity;

            needToPay += specialPrice;
            totalPrice += originalPrice;
        });

        document.querySelector('.total-price .value').textContent = totalPrice.toLocaleString('vi-VN') + ' đ';
        document.querySelector('.need-to-pay .value').textContent = needToPay.toLocaleString('vi-VN') + ' đ';
        document.querySelector('.total-promotion .value').textContent = (totalPrice - needToPay).toLocaleString('vi-VN') + ' đ';
    }

    function handleQuantityChange() {
        updateTotals();
    }

    function updateSelectAllCheckbox() {
        const allChecked = Array.from(document.querySelectorAll('.item input[type="checkbox"]'))
                                .every(checkbox => checkbox.checked);
        document.querySelector('.select-all input[type="checkbox"]').checked = allChecked;
    }

    function handleSelectAllChange(event) {
        const selectAllChecked = event.target.checked;
        document.querySelectorAll('.item input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = selectAllChecked;
        });
        updateTotals();
    }

    document.querySelectorAll('.quantity .value').forEach(input => {
        input.addEventListener('input', handleQuantityChange);
    });

    document.querySelectorAll('.quantity .decrease').forEach(button => {
        button.addEventListener('click', (event) => {
            let input = event.target.closest('.quantity').querySelector('.value');
            let value = parseInt(input.value, 10);
            if (value > 1) {
                input.value = value - 1;
                updateTotals();
            }
        });
    });

    document.querySelectorAll('.quantity .increase').forEach(button => {
        button.addEventListener('click', (event) => {
            let input = event.target.closest('.quantity').querySelector('.value');
            let value = parseInt(input.value, 10);
            input.value = value + 1;
            updateTotals();
        });
    });

    // Sự kiện cho nút xóa từng mục
    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.closest('.item');
            item.remove();
            updateTotals(); // Cập nhật tổng số sau khi xóa
            updateSelectAllCheckbox(); // Kiểm tra lại trạng thái checkbox .select-all
        });
    });

    // Sự kiện cho nút xóa tất cả
    document.querySelector('.select-all .delete').addEventListener('click', (event) => {
        document.querySelectorAll('.item').forEach(item => {
            item.remove();
        });
        updateTotals(); // Cập nhật tổng số sau khi xóa tất cả
        updateSelectAllCheckbox(); // Cập nhật trạng thái checkbox .select-all
    });

    // Sự kiện cho checkbox .select-all
    document.querySelector('.select-all input[type="checkbox"]').addEventListener('change', handleSelectAllChange);

    // Sự kiện để kiểm tra các checkbox trong các mục
    document.querySelectorAll('.item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectAllCheckbox);
    });

    updateTotals(); // Initial call to set totals
    updateSelectAllCheckbox(); // Initial call to set checkbox state
});
