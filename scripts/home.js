'use strict';

//get El
const loginModalBtn = document.getElementById('login-modal');
const logoutBtn = document.querySelector('#btn-logout');
const welcomeMsg = document.querySelector('#welcome-message');
// biến kiểm tra dưới local có người dùng đăng nhập hay chưa

const active = localStorage.getItem(uselogin);
//nếu có người dùng đăng nhập  thì hiển thị các
if (active) {
  loginModalBtn.style.display = 'none';
  welcomeMsg.textContent = `Welcome ${currentUser.firstName}`;
} else {
  logoutBtn.style.display = 'none';
}
//lắng nghe sự kiện clics vào nút đăng xuất
logoutBtn.addEventListener('click', function (e) {
  if (confirm('Bạn muốn đăng xuất ?')) {
    localStorage.removeItem(uselogin);
    window.location.href = './pages/login.html';
  }
});
