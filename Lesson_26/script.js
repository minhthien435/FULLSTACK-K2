
//bt1
function sum(...args){
    if(args.length===0) return 0;
    const result = args.reduce(function(acc,curr){
        if(typeof acc =="string") return acc;
        if(typeof curr !=="number" || Number.isNaN(curr)){
            return "Invalid number";
        }
        return acc+curr;
    },0);
    return result;
}
console.log(sum(5,10,15));
console.log(sum(5,"sum",45));
console.log(sum());

//bt2
// dinh nghia prototype cho kieu Number
Number.prototype.getCurrency = function(unit){
    // su dung toLocaleString de tu dong them dau cach
    const formattedVaLue = this.toLocaleString('en-US');
    return `${formattedVaLue} ${unit}`;
};
String.prototype.getCurrency = function(unit){
    // chuyen choi sang so
    const value = parseFloat(this);
    if(isNaN(value)){
        return "Invalid number";
    }
    return value.getCurrency(unit);
};
var price1= 12000;
console.log(price1.getCurrency('d'));
var price2 ="12000000";
console.log(price2.getCurrency('d'));
// bt4
Array.prototype.reduce2=function(callback,intialValue){
    const length=this.length;
    let accumulator=intialValue;
    let startIndex=0;
    if(arguments.length<2){
        let foundFirst=false;
        for(let i =0;i<length;i++){
            if(this.hasOwnProperty(i)){
                accumulator=this[i];
                startIndex=i+1;
                foundFirst=true;
                break;
            }
        }
        if(!foundFirst){
            throw new TypeError("Reduce of empty array with no intial value");
        }
    }
    for(let i =startIndex;i<length;i++){
        if(this.hasOwnProperty(i)){
            accumulator=callback(accumulator,this[i],i,this);
        }
    }
    return accumulator;
};
const arr1= [1,2,3,4,5];
const result = arr1.reduce2(function(accumulator,value){
    return accumulator+value;
},0);
console.log(result);

// push
Array.prototype.push2=function(){
    // lay do dai hien tai cua mang
    let currentLength=this.length;
    // duyet qua tat ca cac doi so (arguments) truyen vao ham
    for(let i =0;i<arguments.length;i++){
        this[currentLength]=arguments[i];
        currentLength++;
    }
    return currentLength;
};
const numbers = [1,2,3];
const newLength=numbers.push2(4,5,6);
console.log("Mảng mới: ",numbers);
console.log("Độ dài mới: ",newLength);
// filter
// phuong thuc filter2
Array.prototype.filter2=function(callback,thisArg){
    const result=[];
    const length=this.length;
    for(let i =0;i<length;i++){
        // hasOwnProperty dung de loai bo cac phan tu trong
        if(this.hasOwnProperty(i)){
            const isPassed=callback.call(thisArg,this[i],i,this);
            if(isPassed){
                result.push(this[i]);
            }
        }
    }
    return result;
}
const arr = [1,2,3,4,5,6];
const result1=arr.filter2(function(value){
    return value%2!==0;
});
console.log(result1);

var categories = [
  { id: 1, name: "Chuyên mục 1" },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      { id: 4, name: "Chuyên mục 2.1" },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          { id: 10, name: "Chuyên mục 2.2.1" },
          { id: 11, name: "Chuyên mục 2.2.2" },
          { id: 12, name: "Chuyên mục 2.2.3" },
        ],
      },
      { id: 6, name: "Chuyên mục 2.3" },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      { id: 7, name: "Chuyên mục 3.1" },
      { id: 8, name: "Chuyên mục 3.2" },
      { id: 9, name: "Chuyên mục 3.3" },
    ],
  },
];

function renderCategories(data, level = 0) {
    let html = "";
    
    data.forEach(function(item) {
        // Tạo tiền tố: level 1 -> "--|", level 2 -> "--|--|", ...
        const prefix = level > 0 ? "--|".repeat(level) : "";
        
        html += `<option value="${item.id}">${prefix}${item.name}</option>`;
        
        // Kiểm tra điều kiện có children mới gọi đệ quy
        if (item.children && item.children.length > 0) {
            html += renderCategories(item.children, level + 1);
        }
    });
    
    return html;
}

// Chèn vào HTML
const selectHTML = `
    <select name="category" style="width: 250px; padding: 5px;">
        <option value="">Chọn chuyên mục</option>
        ${renderCategories(categories)}
    </select>
`;

document.body.innerHTML = selectHTML;

//Viết hàm convertNested(arr) để chuyển một mảng 1 chiều bất kỳ thành dạng lồng (nested).
function convertNested(arr){
    const map ={}; // tao bo nho tam
    const tree =[]; // mang ket qua
    // dua tat ca item vao map va khoi tao children
    arr.forEach(function(item){
         map[item.id] ={...item, children: [] };
    });
    // xay dung moi quan he cha va con
    arr.forEach(function(item){
        const currentItem = map[item.id];
        const parentId = item.parent;
        if(parentId === 0){
            tree.push(currentItem);
            // neu khong co cha thi dua vao mang goc
        }else{
            // neu co cha tim cha trong map va day vao children cua cha do
            if(map[parentId]){
                map[parentId].children.push(currentItem);
            }
        }
    });
    // xoa thuoc tinh children trong 
    function cleanTree(nodes) {
        nodes.forEach(function(nodes){
            if(nodes.children && nodes.children.length ===0){
                delete nodes.children;
            }else if(nodes.children){
                cleanTree(nodes.children);
            }
        });
    }
    cleanTree(tree);
    return tree;
}
const categorie = [
	{
		id: 1,
		name: "Chuyên mục 1",
		parent: 0,
	},
	{
		id: 2,
		name: "Chuyên mục 2",
		parent: 0,
	},
	{
		id: 3,
		name: "Chuyên mục 3",
		parent: 0,
	},
	{
		id: 4,
		name: "Chuyên mục 2.1",
		parent: 2,
	},
	{
		id: 5,
		name: "Chuyên mục 2.2",
		parent: 2,
	},
	{
		id: 6,
		name: "Chuyên mục 2.3",
		parent: 2,
	},
	{
		id: 7,
		name: "Chuyên mục 3.1",
		parent: 3,
	},
	{
		id: 8,
		name: "Chuyên mục 3.2",
		parent: 3,
	},
	{
		id: 9,
		name: "Chuyên mục 3.3",
		parent: 3,
	},
	{
		id: 10,
		name: "Chuyên mục 2.2.1",
		parent: 5,
	},
	{
		id: 11,
		name: "Chuyên mục 2.2.2",
		parent: 5,
	},
];
const categoriesNess = convertNested(categorie);
console.log(categoriesNess);

// lam phang 
function flatternCategories(arr,parentId =0){
    let result= [];
    arr.forEach(function(item){
        result.push({
            id:item.id,
            name:item.name,
            parentId:parentId
        });
        // kiem tra xem item co con hay chua
        if(item.children && item.children.length >0){
            const childrenFlat = flatternCategories(item.children, item.id);
            result = result.concat(childrenFlat);
        }
    });
    return result;
}
const flatCategories = flatternCategories(categoriesNess);
console.log(flatCategories);