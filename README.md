# Các thuộc tính định dạng văn bản
1. inital - kế thừa từ giá trị mặc định của trình duyệt
2. inherit - kế thừa từ thành phần cha
## Các đơn vị hay dùng
1. Đơn vị tuyệt đối
- px
- pt = 1,3 * px
2. Đơn vị tương đối
- em : tỷ lệ với thành phần cha
- rem: tỷ lệ với mặc định trình duyệt
- %: tỷ lệ với thành phần cha
- vw: tỷ lệ với chiều rộng khung nhìn
- vh: tỷ lệ với chiều cao khung nhìn
``` css
 p {
    color:rgba(56,175,12,0.5);
 }

- color: inhrerit;
- color: initial;
- border: 1px solid currentcolor;
```
---
### font - size
- thay đổi cỡ chữ
- Cú pháp : font-size value + unit
- px
- em
- rem
**Lưu ý**: font-size là thuộc tính kế thừa
Thuộc tính line-height : thiết lập chiều cao của dòng chữ
Cú pháp: line-height: value+ unit hoặc value
``` css
.content{
   font-size:30px;
   line-height:1.5;  
   /* 1. 5 tương đương với 1.5*30 = 45px */
}
/*  Thuộc tính font-family: thiết lập font chữ văn bản
Cú pháp: font-family: font1,font2,font3,.... */
body{
   font-family:Arial,Tahoma,"Times New Roman";
}
@font-face{
   font-family:OpenSans;
}
/* text-decoration
 text-transform
 letter-spacing
 word-spacing
 text-indent 
 word-wrap
 word-break*/
 ```
### Background
- background-color: thiết lập màu nền
- background-image: định nghĩa hình ảnh nền
- background-repeat: xác định cách lặp lại hình ảnh nền
- background-position: thiết lập vị trí ban đầu của hình ảnh nền
- background-size:  định nghĩa kích thước của hình ảnh nền
- background-attachment: xác định cách hiển thị của hình ảnh nền
- background-origin: xác định điểm bắt đầu của hình ảnh nền
- background-clip: xác định vùng hiển thị của hình ảnh nền
