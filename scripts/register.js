'use strict';
const firstNameInput = document.querySelector('#input-firstname');
const lastNameInput = document.querySelector('#input-lastname');
const usernameInput = document.querySelector('#input-username');
const passwordInput = document.querySelector('#input-password');
const confirmPasswordInput = document.querySelector('#input-password-confirm');
const registerBtn = document.getElementById('btn-submit');

// lắng nghe sự kiện click vào nút register
registerBtn.addEventListener('click', function (e) {
  // e.preventDefault();
  // lấy các giá trị nhập vào và cắt khoảng trắng 2 đầu của giá trị
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  const validate = validateData();
  function validateData() {
    let validate = true;
    // kiểm tra các trường đã được nhập hay chưa, nếu 1 trong các giá trị là chuỗi rỗng
    //sẽ trả về false thêm ! để trả về true và thay đổi biến validate
    if (!firstName || !lastName || !username || !password || !confirmPassword) {
      alert('Phải nhập tất cả các dữ liệu');
      validate = false;
    }
    // lặp qua tất cả các đối tượng trong localStroget kiểm tra xem giá trị nhập vào có bằng của đối tượng
    if (userArr.find((user) => username === user.username)) {
      alert('Trùng username');
      validate = false;
    }
    // kiểm tra giá trị nhập vào 2 ô này phải bằng nhau, nêu k bằng nhau thay đổi giá trị biến validate
    if (password !== confirmPassword) {
      alert('ConfirmPassword phải giống Password');
      validate = false;
    }
    // mật khấu nếu nhở hơn 8 thì  biến validate = false
    if (password.length < 8) {
      alert('Mật khẩu phải trên 8 ký tự');
      validate = false;
    }

    return validate;
  }
  // nếu biến validate = true thì chạy các code sau
  if (validate) {
    alert('Đăng ký tài khoản thành công');
    //tạo ra một user mới
    const user = new User(firstName, lastName, username, password);
    // thêm user vào mảng userArray
    userArr.push(user);
    // gọi hàm lưu xuống localStroget
    saveToStorage(key, userArr);
    // chuyển qua trang login
    window.location.href = '../pages/login.html';
  }
});
