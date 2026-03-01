// làm việc với thuộc tính
//element.tenthuoctinh
//element.tenthuoctinh = gia tri
// ==> Chỉ hoạt động với các thuộc tính hợp lệ trong thẻ html tương ứng

var a = document.querySelector("a");
// console.log(a);
// console.log(a.href);
// console.log(a.title);
// console.log(a.id);
// console.log(a.className);
// a.href="https://f8.edu.vn";
a.className = "nav-link";
a.target="_self";

//getAtrribute(tenthuoctinh);
//setAttribute(tenthuoctinh,giatri);
// console.log(a.getAttribute("width"));
// a.setAttribute("height",200);

//Data Attribute (thuộc tính custom được sử dụng để xử lý JS)
// Cú pháp: data-*
var width = a.getAttribute("data-width");
console.log(width);
a.setAttribute("data-height", 200);
// Dataset:Object có sẵn trong Element Node giúp thao tác với data attribute dưới dạng object
var width = a.dataset.width;
console.log(width);
a.dataset.height=200;

delete a.dataset.width;
// thêm thuộc tính data-animation-duration = 2;
// (Sử dụng dataSet)
a.dataset.animationDuration = 2;
//data-animation-duration
a.dataset.animationTimingFunction = "ease";
//data-animation-timing-duration

//Xóa thuộc tính
a.removeAttribute('id');
a.removeAttribute('class');
// Xóa thẻ html
a.remove();
//Classlist
var contentEl = document.querySelector(".content");
console.log(contentEl.classList);
contentEl.classList.add("content-1","content-2","content-3");
contentEl.classList.remove("content-2");
contentEl.classList.replace("content-1","content-li");
console.log(contentEl.classList.contains("content-3"));
contentEl.classList.toggle("item");
contentEl.classList.toggle("item");