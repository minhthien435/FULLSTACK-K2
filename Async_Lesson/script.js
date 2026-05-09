// alert("Hoc js khong kho");
// console.log("Ok chua");
// // dong bo 
// console.log("Hoc js khong kho");
// //=========Bat dong bo============
// setTimeout(()=>{
//     console.log("Bat dau...");
// },0);
// console.log("Hoc js khong kho");

// console.log("Step 1");
// console.log("Step 2");
// setTimeout(function(){
//     console.log("ok chua");
// },0);
// console.log("Step 3");
// console.log("Step 4");

// ES6 ===> Promise
// Callback ==> Callback Hell
// Promise ==> van ton tai callback nhung se viet duoi dang Chaining
//object.method1().method2().method3();

// cac trang thai cua promise 
// 3 trang thai cua promise 
// -pending
// -fulfilled
// -rejected

// để làm việc với promise thì chúng ta có 2 bước
// 1- Khởi tạo object promise và đưa dữ liệu vào promise
// 2- Gọi promise và trả về kết quả

// const getA = (callback) =>{
//     setTimeout(() =>{
//         const user ={
//             name:"Thien Minh",
//             email:"minh@gmail.com",
//         };
//         Callback(user);
//     },3000);
// };
// const getB = (callback) =>{
//     setTimeout(() =>{
//         const user = {
//              name:"Thien Minh",
//             email:"minh@gmail.com",
//         };
//         Callback(user);
//     })
// }
// getA((data) => {
//     console.log(data);
// });
// getB((data) =>{
//     console.log(user);
// })

const  getUser =(userId) =>{
    const users = [
    {
        id:1,
        name:"User 1",
        salary: 1000,
    },
    {
        id:2,
        name:"User 2",
        salary:2000,
    },
     {
        id:3,
        name:"User 3",
        salary:2000,
    },
     {
        id:4,
        name:"User 4",
        salary:2000,
    },
    ];
    return new Promise((resolve) =>{
         setTimeout(() =>{
        const user = users.find(({id}) =>userId === id); 
    },1000);
    });
   
};
const ids = [1,3,4];
// tinh tong thu nhap cua 3 user tren
let total = 0;
for(let i = 0;i<ids.length;i++){
    const id = ids[i];
    getUser(id).then((data) =>{
        const salary = data.salary;
        total+=salary;
    });
}
setTimeout(()=>{
    console.log(total);
},1000);
// Promise all() ==> Thực thi nhiều promise cùng 1 lúc và trả về 1 mảng mới chứa các dữ liệu được resolve
const promiseArr = ids.map((id) => getUser(id));
Promise.all(promiseArr).then(users) => {
    const total = users.reduce((total,user) =>
        total+ user.salary, 0
    );
    console.log(total);
};
// Promise.resolve()
// Promise.reject()

//try catch
try{
    something();
}catch(e){
    console.log(e.message);
}

try{
    let a;
    if(!a){
        throw new Error("Bien a phai co du lieu");
    }
    console.log("Ok chua");
}catch(e){
    document.body.innerHTML = `<h3 style="color:red;">${e.message}</h3>`
}finally{
    console.log("Da xong");
}
console.log("F8");

//async function
// resolve promise khong can dung then (ko co callback)
//cach viet nhu dong bo
const something = async() =>{
    return "F8";
}
console.log(something());

const handleGetA = async() =>{
    const user = await handleGetA()
}