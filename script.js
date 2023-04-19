//button kick mua hàng
function addToCart(button) {
  const productId = button.getAttribute('data-id');
  location.href = `sanpham.html?id=${productId}`;
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

location.href = `muahang.html?id=${productId}&name=${productName}&price=${productPrice}`;


const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
// end button kick mua hàng
