// arow function
const getMessage = (msg) =>{
    console.log("Hoc lap trinh khong kho",msg);
};
getMessage("F8");

const sum=(a,b) =>a+b;
console.log(sum(5,10));

// const name = "Thien Minh";
// const email = "minh@gmail.com";
// const getUser = () =>({
//     name:name,email:email});
// console.log(getUser());

const users = [
    {
        id:1,
        name:"User 1",
    },
    {
        id:2,
        name:"User 2",
    },
    {
        id:3,
        name:"User 3",
    }
];
const getUser = (userId) => users.find((user) => user.id === userId);
console.log(getUser(1));

document.body.innerHTML = `${users.map((user)=> `<h3>${user.name}</h3>`).join("")}`;
// khong nen dung de lam method cua object vi khong dung duoc this
// khong duoc dung de tao constructor

// khong co object prototype
// khoong bind duoc this,arguments

const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    console.log(this);
})

// const user = {
//     name:"Thien Minh",
//     email:"minh@gmail.com",
//     getInfo:function(){
//         return{
//             age:32,
//             getAge:() => {
//                 console.log(this);
//                 return this.age;
//             }
//         };
//     },
// };
// console.log(user.getInfo().getAge());

const user = {
    username:"thien minh",
    email:"thienminh@gmail.com",
    password:"123456",
};
// destructoring (Array,Object)
// pha vo cau truc array object de truy cap vao cac key va luu vao cac bien rieng biet
const user = {
    username:"thienminh",
    email:"thienminh@gmail.com",
    password:"123456",
};
const {username,email:userEmail} = user;
console.log(username,userEmail);
console.log(age);
const {username,email,...rest} = user;
console.log(rest);

const users = ["Thien Minh","thienminh@gmail.com",32,"HCM",{
    displayName:"Thien Minh F8"
},];
const [username,email,age,address] = users;
 console.log(username);
console.log(email);
console.log(address);

const [username,email,...rest] = users;
console.log(username,email,rest);
const [, , , , {displayName}] = users;
console.log(displayName);

const output = {
    displayName:"Hoang An F8",
    emails: [
        {
            email:"minhhjordanlenguyen@gmail.com",
        },
    ],
};
const {
    displayName,
    emails:[{email}],
} = output;
console.log(displayName,email);

const users = [
    {
        id :1,
        name:"Thien minh 1",
    },{
        id:2,
        name:"Thien minh 2",
    },{
        id:3,
        name:"Thien minh 3",
    },
];
//destructuring phan ra đối tượng name 
users.forEach(({name})=>{
    console.log(name);
});
// spread
const arr1 = ["Item 1","Item 2","Item 3"];

const  arr2 = ["Item 4","Item 5","Item 6"];

console.log(arr2);

const todos = ["Todo 1","Todo 2","Todo 3"];
// yeu cau them todo 4 vao mang todos va luu vao bien moi
 const newTodos = [...todos,"Todo 4"];
 console.log(newTodos);
 console.log(todos);

 const form = {
    name:"Thien minh",
    email:"minh@gmail.com",
 };
 // cap nhat lai email va luu object vao bien moi
 const newform = {...form,email:"minhjordanlenguyen@gmail.com"};
 console.log(newform);

 const something=(args1 ,args2 , args3) =>{
    console.log(args1);
    console.log(args2);
    console.log(args3);
 };
 const data = ["Data 1","Data 2","Data 3"];
//  something(...data);
 something.apply(null,data);

 //Enhanced Object Literal
 const name = "Thien Minh";
 const email = "minh@gmail.com";
 const user = {
    name,
    email,
    address,
    getName:function(){
        return this.name;
    },
    getEmail(){
        return this.email;
    }
 };
 console.log(user);

 const something = (name,email,address) =>{
    console.log(`Name:${name}`);
    console.log(`Email: ${email}`);
    console.log(`Address: ${address}`);
 };
 // truong hop 1: Chi muon truyen name
 // something("Thien Minh");
 // truong hop 2 chi muon truyen email
 something(undefined,"minh@gmail.com");
 // xay dung ham ho tro named arguments(Ap dung destructoring)
 const something = ({name,email,address}) =>{
    console.log(`Name : ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Address: ${address}`);
 }
 