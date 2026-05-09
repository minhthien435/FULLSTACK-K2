var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = `Hoc lap trinh khong kho`;
h1.className="title";
h1.title="title";
h1.addEventListener("click",function(){
    this.style.color=`red`;
})
//h1;Tao element
// dua node element vao cay DOM (xac dinh vi tri can dua vao)
root.append(h1);

var h2 =document.createElement("h2");
h2.innerText="Hoc Js rat de";
root.prepend(h2);

var a = document.createElement("a");
a.href="https://fullstack.edu.vn";
a.innerText = "F8";
h1.append(a);

//bai tap :them doan html sau vao duoi cung cua root
var ul = document.createElement("ul");
ul.className="menu"
// su dung innerHTML de thay doi noi dung ben trong the div
// su dung outerHTML de thay doi noi dung toan bo the div
for(var i =1;i<=4;i++){
    var li = document.createElement("li");
    li.innerText=`Item${i}`;
    ul.append(li);
}
root.append(ul);
var btn = document.createElement("button");
btn.innerText="Add";
var css = {
    color:"red",
    border:"1 px solid ",
    backgroundColor:"green"
};

Object.assign(btn.style,css);
btn.addEventListener("click",function(){
    var li = document.createElement("li");
    li.innerText = `Item${i++}`;
    ul.append(li);
});
root.append(btn);

var insertBeforeBtn = document.createElement("button");
insertBeforeBtn.innerText ="Insert Before";
insertBeforeBtn.addEventListener("click",function(){
    var h3 = document.createElement("h3");
    h3.innerText="Hoang An";
    root.insertBefore(h3,h1);
    //chen the p vao sau h1
    var nextElementH1 = h1.nextElementSibling;
    var p  = document.createElement("p");
    p.innerText="Javascript";
    if(!nextElementH1){
        root.append(p);
    }else{
        root.insertBefore(p,nextElementH1);
    }

});
root.append(insertBeforeBtn);

var updateNodeBtn = document.createElement("button");
updateNodeBtn.innerText = "Update Node";
updateNodeBtn.addEventListener("click",function(){
    var h2 =document.createElement("h2");
    h2.innerText="Node thay the";
    root.replaceChild(h2,h1);
    root.removeChild(ul);
})
root.append(updateNodeBtn);
