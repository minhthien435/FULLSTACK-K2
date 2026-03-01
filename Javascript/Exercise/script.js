console.log("Hoc Js khong kho");
console.error("Loi");
//  Khai báo biến (đặt tên theo quy tắc camelCase)
var user;
var userId, username, email;
var course="Fullstack offine",
    age=32;
    // Lưu ý: Nếu 1 biến được khai báo nhưng không gán giá trị thì giá trị mặc định sẽ là underfined
    console.log(user);
    console.log(course);
    // Hiển thị nội dung lên trình duyệt
    document.writeln("Hello anh em");
    
//  Dùng DOM 
document.body.innerHTML = "Hoc Js khong kho";
// Nội dung hiển thị lên trình đuyệt có thể là thẻ html 
var welcome = "<h2>Khoa hoc "+ course +":</h2>";
document.write(welcome);
// Năm 2015 js có bổ dung cú pháp mới để thây thẻ đầu nháy đơn và nháy kép
// Backtick:``;
// Lưu ý: Biến trong js có 2 cách khai báo khác: let,count
// Biểu thức = toán tử và toán hạng
// s,a ,b,c --> toán hạng
// ",+,*,..."---> toán tử 
// %  chia lấy dự
//  ** lũy thừa
//  ++ tăng lên 1 đơn vị
// --  giảm đi 1 đơn vị

// var  a =10;
// var b = 3;
// var c = a **b;
// console.log(c);


// var a = 10;
// var b=2;
// var c = a/b;
// console.log(c);
// var a = 1;
// a++;
// a--;
// ++a;
// --a;
// a++ nhận giá trị trước khi tăng
// ++a nhận giá trị sau khi tăng
// console.log(a);
// var count = 1;
// var total = count++ + ++count + count++ + 10; 
// console.log(total);
//  count= 2;,total=1
// count=3; total= 1+3 =4;
// count=4; total= 4+3=7;
// 2. Toán tử gán
// var a = 10;
// console.log(a);
// a = a+10;
// a+= 10;
// a-=10;
//a/=10;
// a%=10;
// console.log(a);
//3. Toán tử so sánh
// >, <, <=,==,===,!=,!==
// Luôn trả kiểu dữ liệu logic(boolean) true hoặc false
// Lưu ý: 
// == so sánh bằng nhưng chỉ so sánh giá trị
//  === so sánh bằng cả giá trị và kiểu dữ liệu
// != so sánh khác nhưng chỉ so sánh giá trị
// so sánh khác cả dữ liệu và giá trị

// var a =10;
// var check = a >=10;
// console.log(check);
// Toán tử lý luận (kết hợp)
//  kết hợp and &&
// || --> kết hợp or
// ! --> kết hợp not
//  Thứ tự ưu tiên : ngoặc tròn --> and --> or --> not
// var a = 10;
// var check = a <= 5 && a<=15;
// var check = a <0 || (a>=5 && a<=15);
// console.log(check);
// var b =5;
//5. toán tử 3 ngôi
//  Cú pháp : dieukien ? giatridung : giatrisai
// var a =10;
//  var b = a>=10?'Dung':'sai';
//  console.log(b);

// var a = 10;
// var total = 5 + 10 + a <= 10?10:5+2;
// console.log(total);
// 6. Toán tử nullish(??)
// Cách hoạt động :Nếu biến !==underfined và bien!==null lấy biến ngược lại lấy giá trị đằng sau
// var x ;
// var result = x ?? "F8";
// console.log(result);

// var y =10;
// var result1 = y ?? "F8";
// console.log(result1);
// //  Viết lại toán tử nullish bằng toán tử 3 ngôi
// var result = x!==null && x!== underfined ? x:'F8'
// console.log(x);

var a =10; var b=-5;
if(a>0 && b>0){
    console.log("Cung dau")
}else if(a<0 && b<0){
    console.log("cung dau");
}else{
    console.log("trai dau");
}