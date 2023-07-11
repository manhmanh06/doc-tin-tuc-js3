'use strict';
// tạo hàm lưu dữ liệu xuống localStroraget
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// hàm lấy giá trị dưới local
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// đặt tên key lưu xuống local
const key = 'userArr';

// tạo biến lưu trữ , nếu đã có dữ liệu thì get lên , nếu chưa có thì tạo biến bằng một mảng rỗng
const userData = localStorage.getItem(key) ? getFromStorage(key) : [];

// chuyển từ JS Object sang Class Instance
const userArr = userData.map((user) => parseUser(user));
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password,
    userData.category,
    userData.pageSize
  );

  return user;
}
const uselogin = 'CURRENT_USER';
//tương tự như trên
const currentUser = localStorage.getItem(uselogin)
  ? getFromStorage(uselogin)
  : {};

const todo = 'TODO';
const todos = localStorage.getItem(todo) ? getFromStorage(todo) : [];
const todoArr = todos.map((todo) => parseTask(todo));

function parseTask(todos) {
  const todo = new Task(todos.task, todos.owner, todos.isDone);

  return todo;
}
