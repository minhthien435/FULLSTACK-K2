var root = document.querySelector("#root");
var h1 = document.createElement("h1");
var textNode =document.createTextNode(0);
h1.innerText = `Count : `;
h1.append(textNode);
var button = document.createElement("button");
button.innerText="Click Me";
button.addEventListener("click",function(){
    textNode.data++;
});
root.append(h1);
root.append(button);
// comment Node
var comment = document.createComment("Hello anh em F8");
root.append(comment);

// XSS
/* 
Cach 1: Xu ly chuoi bang cach chuyen <, > thanh html entities
Cach 2: tao cac element bang document createElement sau do dua noi dung vao bang innerText
*/

