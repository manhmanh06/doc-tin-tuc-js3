'use strict';
const taskInput = document.querySelector('#input-task');
const addBtn = document.querySelector('#btn-add');

const todoListEl = document.getElementById('todo-list');

// console.log(currentTask);
addBtn.addEventListener('click', () => {
  if (currentUser) {
    //Lấy dữ liệu từ ô input và owner từ người dùng đang đăng nhập
    const task = taskInput.value.trim();
    const owner = currentUser.username;
    // kiểm tra nếu có dữ liệu thì tạo một task mới, nếu chưa nhập thì đưa ra thông báo cho người dùng
    if (task) {
      const tasks = new Task(task, owner);
      todoArr.push(tasks);
      saveToStorage(todo, todoArr);

      renderTodo(todoArr);
      taskInput.value = '';
    } else {
      alert('Vui lòng nhập dữ liệu');
    }
  } else {
    alert(' Vui lòng đăng nhập trước khi thêm task 😁');
  }
});
let currentTask;
renderTodo(todoArr);
//tạo hàm hiện thị các todo của người dùng đang đăng nhập
function renderTodo(todoArr) {
  //mảng chứa các todo của người dùng hiện tại - tìm kiếm tất cả các mảng có owner bằng username
  currentTask = todoArr.filter((tasks) => tasks.owner === currentUser.username);
  // console.log(currentTask);
  let html = '';
  if (currentTask) {
    currentTask.forEach((element, index) => {
      html += `
      <li class ='${
        element.isDone == true ? 'checked' : ''
      }' value ='${index}'>${element.task}<span class="close">x</span></li>
      `;
    });
    todoListEl.innerHTML = html;
  }
}

todoListEl.addEventListener('click', function (event) {
  const clickedEl = event.target;
  console.log(clickedEl);
  // Kiểm tra xem phần tử được click có phải là phần tử li hay không
  if (clickedEl.nodeName === 'LI') {
    const taskIndex = clickedEl.value;
    //khi click thì nếu isDone giá trị là true thì chuyển thành false và ngược lại
    currentTask[taskIndex].isDone
      ? (currentTask[taskIndex].isDone = false)
      : (currentTask[taskIndex].isDone = true);
    //lưu dữ liệu lại local
    saveToStorage(todo, todoArr);
    clickedEl.classList.toggle('checked'); // Thêm hoặc xóa class checked để thay đổi background màu
  }

  // Kiểm tra xem phần tử được click có phải là phần tử con .close hay không
  if (clickedEl.classList.contains('close')) {
    if (confirm('Bạn chắc chắn muốn xóa ?')) {
      clickedEl.parentElement.remove(); // Xóa phần tử li cha của phần tử .close được click
      const index = clickedEl.closest('li').value;
      // console.log(index);
      // Tìm phần tử đang được click trong todoArr và xóa phần tử đó bằng việc so sánh
      //2 object này tạo ra từ cùng một contructor và có cùng các thuộc tính với giá trị tương ứng bằng nhau
      let indexTask = todoArr.findIndex((task) => task === currentTask[index]);

      // console.log(currentTask);
      todoArr.splice(indexTask, 1);
      saveToStorage(todo, todoArr);
    }
  }
});
