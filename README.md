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
### border 
```css
.box{
   width:0;
   height:0;
   border-width:50px;
   border-style:solid;
   border-color: transparent transparent blueviolet transparent;
   border-top-width:0;
}
```
### Thuộc tính position
- Thuộc tính position trong css cho phép kiểm soát cách phần tử được định vị trong layout.
- static: định vị mặc định của phần tử.Phần tử sẽ theo dòng và không bị ảnh hưởng bởi thuộc tính top,bottom,left,right, hoặc z-index.
- relative: định vị phần tử theo vị trí ban đầu và có thẻ dịch chuyển bằng các thuộc tính top,bottom,left,right
- absolute: định vị phần tử một cách tuyệt đối dựa trên phần tử cha gần nhất có thuộc tính position khác với static.Phần tử sẽ di chuyển dựa trên các thuộc tính top,bottom,left,right.
- fixed: định vị phần tử một cách tuyệt đối dựa trên trình duyệt.Phần tử sẽ luôn hiển thị kể cả khi cuộn trang.
- sticky: Kết hợp giữa relative và fixed.Phần tử sẽ định vị như relative khi nằm trong một vùng nhất định và sau đó chuyển sang fixed khi cuộn trang.
### Một số kỹ thuật nâng cao:
- z-index:thuộc tính xác định vị trí sắp xếp 3D của phần tử.Giá trị lớn hơn sẽ đặt phần tử phía trên các phần tử khác.
- overflow:thuộc tính overflow xác định cách xử lý nội dung của phần tử khi nó vượt kích thước chỉ định.
### margin,padding (inline)
- thuộc tính visibility ẩn và hiện thành phần html vẫn giữ không gian.
- Thuộc tính opacity: làm mờ 
### list style
- list-stype-position:inside/ outside
- list-style-type: kieu danh sach
- none --> khong o dinh dang danh sach
- circle
- square
- decimal
- decimal-leading-zero
- lower-alpha
- upper-alpha