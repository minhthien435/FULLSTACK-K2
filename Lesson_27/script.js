/* 
Event:
- Hành động từ phía người dùng tác động lên thẻ html
- Mặc định Javascript có định nghĩa các event tương ứng tới các thẻ html
(Mỗi một thẻ html sẽ có các event khác nhau)
- Nhiệm vụ của lập trình viên javascript 
==> Lắng nghe được event từ phía người dùng để xử lý.
*/
/* 
 Cú pháp lắng nghe sự kiện:
 element.tensukien = eventHandler(eventHandler là 1 hàm);
 element.addEventListener(tensukien,listener)
 (listener la 1 ham)
*/
var btn = document.querySelector(".btn");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("Click me");
// };
// btn.addEventListener("click",function(){
//     console.log("Help me");
// });
// btn.addEventListener("click",function(){
//     console.log("Choi game di em");
// });
// btn.onclick = function(){
//     console.log("Hoc DOM khong kho");
// }
// var items = document.querySelectorAll(".menu li");
// items.forEach(function(item){
//     item.onclick=function(){
//         // console.log(item);
//         console.log(this);
//     };
// });
var startBtn = document.querySelector(".start-btn");
var count =0;
var handleClick = function(){
    count++;
    console.log(count);
    if(count % 5 === 0 ){
        btn.removeEventListener("click",handleClick);
    }
}

startBtn.addEventListener("click",function(e){
    console.log("Da bat dau");
    console.log(e); // event object
    btn.addEventListener("click",handleClick);
});
 