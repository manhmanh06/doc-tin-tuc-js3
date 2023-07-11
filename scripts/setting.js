'use strict';
const pageSizeInput = document.querySelector('#input-page-size');
const categoryInput = document.querySelector('#input-category');
const submitBtn = document.querySelector('#btn-submit');

submitBtn.addEventListener('click', (e) => {
  // kiểm tra người dùng đã nhập dữ liệu hay chưa?

  if (+pageSizeInput.value < 0) {
    alert('không hợp lệ');
    return;
  }
  if (pageSizeInput.value) {
    currentUser.category = categoryInput.value;
    currentUser.pageSize = pageSizeInput.value;
    // tìm vị trí của người dùng đang đăng nhập trong userArr và sửa nó
    const currentIndex = userArr.findIndex(
      (user) => user.username === currentUser.username
    );

    userArr[currentIndex].category = categoryInput.value;
    userArr[currentIndex].pageSize = pageSizeInput.value;

    alert('Setting thành công !');
    saveToStorage(key, userArr);
    saveToStorage(uselogin, currentUser);
  } else {
    alert('Vui lòng chọn pageSize và Category');
  }
});
