'use strict';

const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');
const containerEl = document.querySelector('#news-container');
const pageNum = document.querySelector('#page-num');

let totalPages = 0;
let page = 1;
// bắt sự kiện click vào btn next
nextBtn.addEventListener('click', function () {
  // mỗi khi được click thì thực hiện các dòng code sau
  //tăng page lên 1
  page++;
  // hiển thị ra giao diện người dùng số page
  pageNum.textContent = page;
  //mỗi khi click, gọi Api và hiện thị ra giao diện
  requestApi(currentUser);
});
//bắt sự kiện vào nue
prevBtn.addEventListener('click', function () {
  page--;
  pageNum.textContent = page;
  requestApi(currentUser);
});

// gọi hàm này với dữ liệu mặc định khi người dùng truy cập vào
requestApi(currentUser);
// hàm này sẽ trả về một Promise , xử lý bất đồng bộ
async function requestApi(currentUser, country = 'us') {
  try {
    let apiKey = 'aa922f5c7e9d4796971d173aaf7a62c5';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${currentUser.category}&pageSize=${currentUser.pageSize}&page=${page}&apiKey=${apiKey}`;
    // lệnh gọi API
    const data = await fetch(url);
    const response = await data.json();
    //tất cả số page có  thể hiện thị khi gọi API
    totalPages = Math.ceil(response.totalResults / currentUser.pageSize);
    // tạo biến chưa tất cả dữ liệu về tin tức
    const res = response.articles;
    // gọi hàm để render ra cho người dùng
    rederData(res);
  } catch (error) {
    // nếu lỗi hiện thông báo cho người dùng
    alert(error.message);
  }
  // tạo hàm render dữ liệu đã được trả về
  function rederData(data) {
    containerEl.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      //tạo El mới
      const divEl = document.createElement('div');
      //thêm các class cho El
      divEl.classList.add('card', 'flex-row', 'flex-wrap');
      divEl.innerHTML = `<div class="card mb-3" style="">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${data[i].urlToImage}"
            class="card-img"
            alt="Đây là ảnh">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">${data[i].description}</p>
            <a href="${data[i].url}"
              class="btn btn-primary">View</a>
          </div>
        </div>
      </div>
    </div>`;

      containerEl.append(divEl);
    }
  }
  //nếu số page được gọi bằng tổng page được trả về từ API thì ẩn nút next
  if (page === totalPages) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
  // khi đang ở page 1 thì ẩn nút prev
  if (page === 1) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }
}
