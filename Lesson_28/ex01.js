var btn = document.querySelector(".btn");
// const input = document.querySelector(".input");
// btn.addEventListener("mousemove",function(e){
//     // console.log(this);
//     // console.log(e.target);
//     console.log(e);
// });
// btn.addEventListener("dblclick",function(){
//     console.log(e);
// });
// // input.addEventListener("input",function(e){
// //     // console.log(e);
// //     var key = e.data;
// //     var value = e.target.value;
// //     console.log(`key = ${key}`, `value=${value}`);
// // });
// input.addEventListener("blur",function(){
//     console.log(e);
// });
// document.body.addEventListener("keyup",function(e){
//     console.log(e);
// });

var btn = document.querySelector(".btn");
var initialX = 0;
var initialY=0;

btn.addEventListener("mousedown",function(){
    // Add event kéo (mousemove)
    document.addEventListener("mousemove",handleDrag);
    // initialX=e.offsetX;
    // initialY=e.offsetY;
    initialX=btn.clientWidth/2;
    initialY=btn.clientHeight/2;
});
document.addEventListener("mouseup",function(){
    document.removeEventListener("mousemove",handleDrag);
});
var handleDrag = function(e){
    var clientX = e.clientX;
    var clientY = e.clientY;
    btn.style.translate = `${clientX-initialX}px ${clientY-initialY}px`;
}