const slidesData = [
    {image: "https://picsum.photos/id/25/800/400",title: "Slide 1"},
    {image: "https://picsum.photos/id/26/800/400",title: "Slide 2"},
    {image: "https://picsum.photos/id/27/800/400",title: "Slide 3"},
    {image: "https://picsum.photos/id/28/800/400",title: "Slide 4"},
];

let currentPosition=0;

const imageElement = document.getElementById("slide-image");
const titleElement = document.getElementById("slide-title");
const counterElement = document.getElementById("slide-counter");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dotsWrapper = document.getElementById("dots-wrapper");

for(let i = 0;i<slidesData.length;i=i+1){
    const dot = document.createElement("span");
    dot.className="dot";
    dotsWrapper.appendChild(dot); // put the dot inside the wrapper
}
const allDots = document.querySelectorAll(".dot");// get the list of all dots
// when the button is clicked we call athis to redraw the image
function updateScreen(){
    //A. get the data for current slide
    const data = slidesData[currentPosition];
    // convert data into html elements
    imageElement.src=data.image;
    titleElement.innerText = data.title;
    // calculate the counter since the pos starts at 0
    counterElement.innerText = (currentPosition+1)+ "/"+slidesData.length;
    // Change the dots color
    for(let i =0;i<allDots.length;i=i+1){
        if(i === currentPosition){
            allDots[i].style.backgroundColor = "black";// hightlight the current

        }else{
            allDots[i].style.backgroundColor="gray";
        }
    }
}
// listen to the next btn
nextBtn.addEventListener("click",function(){
    currentPosition=currentPosition+1;
    if(currentPosition === slidesData.length){
        currentPosition = 0;
    }
    updateScreen();
});

// listen to prev btn
prevBtn.addEventListener("click",function(){
    currentPosition = currentPosition-1;
    if(currentPosition<0){
        currentPosition=slidesData.length-1;
    }
    updateScreen();
});
// auto slide 3 seconds

setInterval(function(){
    currentPosition=currentPosition+1;
    if(currentPosition=== slidesData.length){
        currentPosition=0;
    }
    updateScreen();
},3000);
updateScreen();
