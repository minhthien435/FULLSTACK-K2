// Event object
//1. preventDefault()
//=> Ngăn chặn các hành động mặc định của trình duyệt với các thẻ html
//  var link = document.querySelector(".link");
//  link.addEventListener("click",function(e){
//     e.preventDefault();
//     console.log(this.href);
//  });
//  document.addEventListener("contextmenu",function(e){
//     e.preventDefault();
//     console.log("OK");
//  });
// var menu = document.querySelector(".menu");
// document.addEventListener("contextmenu",function(e){
//     e.preventDefault();
//     var x = e.clientX;
//     var y = e.clientY;
//     var css = {
//         display:"block",
//         top:y+"px",
//         left:x+"px",
//     };
//     Object.assign(menu.style, css);
// });
// document.addEventListener('click',function(){
//     console.log("The cha");
//     var css = {
//         display:"none",
//     };
//     Object.assign(menu.style, css);
// });
// menu.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("The con");
//     if(e.target.nodeName ==='LI'){
//         e.target.style.color = "yellow";
//     }

// });
var menuLinkList = document.querySelectorAll("a");
menuLinkList.forEach(function(menuLink){
    var subMenu = menuLink.nextElementSibling;
    if(subMenu){
        menuLink.parentElement.classList.add("has-children");
    }
    menuLink.addEventListener("click",function(e){
        e.preventDefault();
        this.parentElement.classList.toggle("active");
    });
});
