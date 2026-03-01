// Dung inline css ==> them truc tiep css tu JS

const styleBtn1 = document.querySelector(".style-1");
var boxEl = document.querySelector(".box");
console.log(boxEl.style);
styleBtn1.addEventListener("click",function(){
    boxEl.style="color:red";
});
var styleBtn2 = document.querySelector(".style-2");
styleBtn2.addEventListener("click",function(){
    // boxEl.style.fontStyle="italic";
    // boxEl.style.fontWeight="bold";
    // boxEl.style.backgroundColor ="gray";
    var css = {
        fontStyle:"italic",
        fontWeight:"700",
        backgroundColor:"gray",
    };
    Object.assign(boxEl.style,css);
});
// baitap: click vào button style 3 ==> thêm ảnh nền (background image) với hình ảnh trong folder imagé
var styleBtn3 = document.querySelector(".style-3");
styleBtn3.addEventListener("click",function(){
    boxEl.style.backgroundImage = `images-3.img`
})
  