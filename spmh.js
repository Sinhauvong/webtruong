// Lấy giá trị giỏ hàng từ localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Thêm sản phẩm vào giỏ hàng
function addToCart(productName, productPrice, productQuantity, productImage) {
    // Kiểm tra xem sản phẩm này đã được thêm vào giỏ hàng trước đó hay chưa
    const product = cartItems.find(item => item.name === productName);

    if (product) {
        product.quantity += productQuantity;
    } else {
        const newItem = { name: productName, price: productPrice, quantity: productQuantity, image: productImage };
        cartItems.push(newItem);
    }

    // Lưu trữ giỏ hàng vào localStorage để sử dụng lại sau này
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`Sản phẩm ${productName} đã được thêm vào giỏ hàng.`);
}

// Xóa toàn bộ các sản phẩm trong giỏ hàng và khôi phục trang về trạng thái ban đầu
function clearCart() {
    cartItems = [];
    localStorage.removeItem('cartItems');
    document.getElementById("cartItems").innerHTML = "";
}

// Xác nhận thanh toán khi người dùng bấm nút "Thanh toán"
function confirmPayment(productName, productPrice, productQuantity) {
    const totalPrice = productPrice * productQuantity;
    const confirmationMessage = `Bạn có chắc chắn muốn thanh toán ${totalPrice} VNĐ cho sản phẩm ${productName}?`;

    if (confirm(confirmationMessage)) {
        alert(`Cảm ơn bạn đã thanh toán ${totalPrice} VNĐ cho sản phẩm ${productName}. Chúc bạn một ngày tốt lành!`);
    }
}

// Tải sản phẩm vào trang mua hàng
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('ten-hoa');
    const productPrice = urlParams.get('gia-hoa');
    const productQuantity = urlParams.get('so-luong');
    const productImage = urlParams.get('hinh-anh');

    // Hiển thị thông tin sản phẩm trong trang mua hàng
    document.getElementById("productName").innerText = productName;
    document.getElementById("productQuantity").innerText = productQuantity;
    document.getElementById("productPrice").innerText = productPrice * productQuantity;

    // Thêm sản phẩm vào giỏ hàng khi người dùng bấm nút "Thêm vào giỏ hàng"
    const addToCartButton = document.getElementById("addToCartButton");
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function () {
            addToCart(productName, productPrice, productQuantity, productImage);
        });
    }

    // Xác nhận thanh toán khi người dùng bấm nút "Thanh toán"
    const confirmButton = document.getElementById("confirmButton");
    if (confirmButton) {
        confirmButton.addEventListener('click', function () {
            confirmPayment(productName, productPrice, productQuantity);
        });
    }
}

// Tải giỏ hàng lên trang giỏ hàng
function loadCart() {
    let cartHTML = "";

    for (let i = 0; i < cartItems.length; i++) {
        const { name, price, quantity, image } = cartItems[i];
        const totalPrice = price * quantity;

        cartHTML += `
      <div>
        <h2>${name}</h2>
        <p>Giá: ${price} VNĐ</p>
        <img src="${image}" alt="${name}" width="300" height="300">
        <label>Số lượng:</label>
        <input type="number" id="productQuantity${i}" value="${quantity}" min="1" max="10">
        <p>Tổng cộng: ${totalPrice} VNĐ</p>
        <button onclick="updateQuantity(${i}, '${name}', '${price}', '${image}')">Cập nhật</button>
        <button onclick="removeFromCart(${i})">Xóa khỏi giỏ hàng</button>
      </div>
    `;
    }

    document.getElementById("cartItems").innerHTML = cartHTML;
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(index, productName, productPrice, productImage) {
    const newQuantity = document.getElementById(`productQuantity${index}`).value;
    cartItems[index].quantity = newQuantity;

    // Lưu trữ giỏ hàng vào localStorage để sử dụng lại sau này
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert(`Số lượng sản phẩm ${productName} đã được cập nhật thành công.`);
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    const productName = cartItems[index].name;
    cartItems.splice(index, 1);

    // Lưu trữ giỏ hàng vào localStorage để sử dụng lại sau này
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert(`Sản phẩm ${productName} đã được xóa khỏi giỏ hàng.`);
    loadCart();
}
