// Dom navigation
// Chọn các element theo phân cấp :cha,con,ngang hàng(trước,sau)
/* 
- parentElement
- children
- nextElementSibling
- previousElementSibling

*/
var menuLinkList= document.querySelectorAll("a");
menuLinkList.forEach(function(menuLink){
    menuLink.addEventListener("click",function(e){
        e.preventDefault();
        // console.log(this);
        // this.parentElement.classList.add("active");
        // console.log(this.nextElementSibling);
        // console.log(this.nextElementSibling.children);
        var children = this.nextElementSibling.children;
        for(var i =0;i<children.length;i++){
            children[i].classList.add("children");
        }
    });
});
