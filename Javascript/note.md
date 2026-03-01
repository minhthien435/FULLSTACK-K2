# javascript
- Javascript là ngôn ngữ lập trình phía client
- Khi NodeJS ra đời --> Javascript được chạy trên server
- File có phần mở rộng .js
## Truthy && Falsy
- Truthy và Falsy tìm giá trị JS khi ép về kiểu dữ liệu boolean là true hoặc false.
- **Toán tử &&** --> tìm biểu thức sai, còn đúng thì còn chạy đến khi hết thì thôi.
```javascript
    var a = 1;
    var b = 2;
    var c= 3;
    var result = a && b && c;
    console.log(result);
```
- **Toán tử ||** --> tìm biểu thức đúng ,còn sai thì chạy đến khi nào hết thì thôi.
## Vòng lặp
- Cú pháp trong lập trình
- Cho phép đoạn chương trình lặp đi lặp lại theo số lần nhất định
- 2 loại  vòng lặp:
- Vòng lặp với số lần xác định trước
==> for
- Vòng lặp với số lần không xác định trước while, do while
<!-- Vòng lặp for 
    for(initial,condition,step){
    code}

-->
```javascript
for (var i =1;i<=10;i++){
    console.log(`Vòng lặp thứ:$(i)`);
for(var i =10;i>=1;i--){
    console.log(`Lần lặp thứ:$(i)`);
}
}
```
- Từ khóa break --> dừng vòng lặp tại thời điểm mong muốn (không cần phải chạy xong).
```javascript
for(var i=1;i<=10;i++){
    console.log(i);
    if(i===5){
        break;
    }
}
```
## Function
- Hàm là gì ?
-  Cú pháp trong lập tình giúp tách các đoạn chương trình con trong chương trình lớp để tái sử dụng
-  Thể hiện là 1 chức năng động từ
-  Đặt tên hàm theo quy tắc camelcase và sử dụng động từ
-  Ví dụ:sum,getTotal,setMessage,getMessage,showUsers,...
-  Cú pháp:
-  Định nghĩa hàm
```javascript
function tenham(){
    nội dung hàm
}
```
==> tham số (parameters);
- Gọi hàm
- tên hàm()
- tenham(doiso1,doiso2,doiso3,...);
==> đối số arguments
- Biến toàn cục: sử dụng trong phạm vi ngoài hàm
- Biến cục bộ:Sử dụng ở trong phạm vi trong hàm
- Trên thực tế : Trong 1 hàm có thể gọi 3 đến 4 hàm khác nhau
- Hàm ẩn danh (Hàm không tên,anonymous function)
- **Lưu ý**: Hàm ẩn danh sẽ không gọi và định nghĩa được (trừ phi gắn vào 1 biến hoặc đưa vào tham số của hàm khác)
- setInterval --> Lặp đi lặp lại một đoạn chương trình với một khoảng thời gian nhất định
-  

# DOM
- Viết tắt: Document Object Model
- Mô hình hóa đối tượng các tài liệu HTML
- Thay đổit HTML thông qua javascript
```
Document
- html element
  - head element
    - title eleme
  - body
    - h1
      - id
      - class
      - text
    - h2
      - id
      - class
    - a
        - href
        - target
        - title
        - text
 ```
 ## Các loại DOM
 - DOM Element
 - DOM HTML
 - DOM CSS
 - DOM Event
 - DOM Event Listener
 - DOM Node, NodeList
 - DOM Navigation
 - 