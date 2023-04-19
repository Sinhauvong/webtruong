// Lấy các phần tử DOM cần thiết
const loginForm = document.querySelector('#login-form');
const loginUsername = document.querySelector('#login-username');
const loginPassword = document.querySelector('#login-password');
const loginError = document.querySelector('#login-error');
const loginSuccess = document.querySelector('#login-success');

const registerForm = document.querySelector('#register-form');
const registerUsername = document.querySelector('#register-username');
const registerEmail = document.querySelector('#register-email');
const registerPassword = document.querySelector('#register-password');
const registerError = document.querySelector('#register-error');
const registerSuccess = document.querySelector('#register-success');

// Xử lý đăng nhập
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  // Kiểm tra tính hợp lệ của thông tin đăng nhập
  if (loginUsername.value === 'admin' && loginPassword.value === 'admin123') {
    // Đăng nhập thành công
    loginError.innerHTML = '';
    loginSuccess.innerHTML = 'Đăng nhập thành công!';
  } else {
    // Đăng nhập thất bại
    loginSuccess.innerHTML = '';
    loginError.innerHTML = 'Tài khoản hoặc mật khẩu không đúng!';
  }
});

// Xử lý đăng kí
registerForm.addEventListener('submit', e => {
  e.preventDefault();

  // Kiểm tra tính hợp lệ của thông tin đăng kí
  if (registerUsername.value.trim() === '') {
    registerError.innerHTML = 'Vui lòng nhập tên tài khoản!';
  } else if (registerEmail.value.trim() === '') {
    registerError.innerHTML = 'Vui lòng nhập địa chỉ email!';
  } else if (registerPassword.value.trim() === '') {
    registerError.innerHTML = 'Vui lòng nhập mật khẩu!';
  } else {
    // Đăng kí thành công
    registerError.innerHTML = '';
    registerSuccess.innerHTML = 'Đăng kí thành công!';
    registerForm.reset(); // Xóa các trường thông tin đã nhập
  }
});
