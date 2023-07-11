'use strict';

const loginBtn = document.querySelector('#btn-submit');
const loginUsername = document.querySelector('#input-username');
const loginPassword = document.querySelector('#input-password');
loginBtn.addEventListener('click', login);
function login() {
  const nameLogin = loginUsername.value.trim();
  const passLogin = loginPassword.value.trim();
  // kiểm tra đã có người dùng hay chưa , có thì lấy ra
  const user = userData.find(
    (user) => user.username === nameLogin && user.password === passLogin
  );

  // kiểm tra người dùng nhập dữ liệu hay chưa
  if (!nameLogin || !passLogin) {
    alert('Vui lòng nhập tên đăng nhập và mật khẩu');
  } else if (user) {
    // hiện thị thông báo, lưu xuống localStoraget
    alert(`Đăng nhập thành công với tài khoản ${nameLogin}`);

    saveToStorage(uselogin, user);
    window.location.href = '../index.html';
  } else {
    // không có thì hiện thị thông báo cho người dùng
    alert('Tên đăng nhập hoặc mật khẩu không đúng');
  }
}
