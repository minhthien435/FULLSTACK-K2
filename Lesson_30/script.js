// var progressBar = document.querySelector(".progress-bar");
// var progress = progressBar.querySelector(".progress");
// var progressSpan = progress.querySelector("span");
// var initialClientX=0;
// var initialWidth=0;
// var progressBarWidth=progressBar.clientWidth;
// // bam chuot xuong tai progress-bar ===> nut tim se di chuyen toi vi tri vua bam
// progressBar.addEventListener("mousedown",function(e){
//     // Lay toa do tai vi tri bam(offsetX)
//     var offsetX = e.offsetX;
//     // tinh chieu rong cua progress-bar
//     var progressBarWidth=progressBar.clientWidth;
//     //tinh ty le phan tram giua toa do xuong va chieu rong
//     var rate= offsetX / progressBarWidth*100;
//     //cap nhat css
//     progress.style.width= rate +"%";
   
//     // gan vi tri cua button mau tim so voi body
// });
// progressSpan.addEventListener("mousedown",function(e){
//     e.stopPropagation();
//     initialClientX = e.clientX;
//     initialWidth=progress.clientWidth;
//     document.addEventListener("mousemove",handleDrag);
//     var offsetXSpan  = e.offsetX;
//     var rate = (offsetX+offsetXSpan/2)/progressBarWidth*100;
//     progress.style.width=rate+"%";
//      initialClientX = e.clientX;
// });
// document.addEventListener("mouseup",function(){
//     document.removeEventListener("mousemove",handleDrag);
// });
// var handleDrag=function(e){
//     var clientX = e.offsetX;
//     var offsetProgressbar = clientX-initialClientX;
//     var rate =(offsetProgressbar/progressBarWidth)*100;
//     progress.style.width=rate+"%";
// };

var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

// Khai báo biến dùng chung để các hàm "nhìn thấy" nhau
var initialClientX = 0;
var initialWidth = 0;
var progressBarWidth = progressBar.clientWidth;

// 1. Bấm chuột xuống tại progress-bar
progressBar.addEventListener("mousedown", function(e) {
    if (e.target === progressSpan) return; // Nếu bấm trúng nút tròn thì để xử lý kéo lo
    
    var offsetX = e.offsetX;
    var rate = (offsetX / progressBar.clientWidth) * 100;
    progress.style.width = rate + "%";
});

// 2. Xử lý khi di chuyển chuột (Drag)
var handleDrag = function(e) {
    // Tính khoảng cách chuột đã di chuyển so với điểm bắt đầu
    var moveX = e.clientX - initialClientX;
    
    // Tính chiều rộng mới (chiều rộng cũ + khoảng cách di chuyển)
    var newWidth = initialWidth + moveX;
    var rate = (newWidth / progressBar.clientWidth) * 100;

    // Khống chế trong khoảng 0 - 100%
    if (rate < 0) rate = 0;
    if (rate > 100) rate = 100;

    progress.style.width = rate + "%";
};

// 3. Bấm chuột vào nút tròn (span)
progressSpan.addEventListener("mousedown", function(e) {
    e.stopPropagation(); // Ngăn sự kiện mousedown của progressBar chạy
    
    // Lưu lại vị trí chuột và chiều rộng thanh progress hiện tại
     initialClientX = e.clientX;
    initialWidth = progress.clientWidth; 
    
    document.addEventListener("mousemove", handleDrag);
});

// 4. Thả chuột
document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", handleDrag);
});
// file nhac


var audio = document.querySelector("audio");
var player = document.querySelector(".player");
var playBtn = document.querySelector(".play-btn");
var playTimer = document.querySelector(".play-timer");
var playIcon =document.querySelector("i");
var currentTimeEl = playTimer.firstElementChild;
var durationEl = playTimer.lastElementChild;

var duration = 0;
var setDuration = function(){
    duration=audio.duration; 
}
var getTimeFormat = function(seconds){
    var mins= Math.floor(seconds/60);
    seconds=Math.floor(seconds-mins*60);
    return `${mins<10 ?"0"+ mins:mins}:${seconds<10 ?"0" +seconds:seconds}`;
}
// setting button play and pause
window.addEventListener("load",function(){
   setDuration();
    durationEl.innerText = getTimeFormat(duration);
    playIcon.addEventListener("click",function(){
    //    if(playIcon.classList.contains("fa-play")){
    //     // playIcon.classList.replace("fa-play","fa-pause");
    //     audio.play();
    //    }else{
    //     // playIcon.classList.replace("fa-pause","fa-play");
    //     audio.pause();
    //    }
        if(audio.paused){
            // nhac dang dung phat nhac
            audio.play();
        }else{
            // nhac dang phat 
            audio.pause();// dung nhac
        }
        
       
    });
    audio.addEventListener("play",function(){
        playIcon.classList.replace("fa-play","fa-pause");
    });
    audio.addEventListener("pause",function(){
         playIcon.classList.replace("fa-pause","fa-play");
    });
    audio.addEventListener("timeupdate",function(){
        var currentTime = audio.currentTime;
        currentTimeEl.innerText = getTimeFormat(currentTime);
        var rate = currentTime/duration *100;
        progress.style.width=`${rate}%`;
    })
});

