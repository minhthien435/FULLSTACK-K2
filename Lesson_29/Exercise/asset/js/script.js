var carouselInnerEl = document.querySelector(".carousel .carousel-inner");
var slideItemEls = document.querySelectorAll(".carousel .item");
var nextBtnEl = document.querySelector(".carousel .carousel-nav .next");
var prevBtnEl = document.querySelector(".carousel .carousel-nav .prev");
var carouselBtnListEl = document.querySelector(".carousel .carousel-button-list");

var itemCount = slideItemEls.length;
var clientWidth = carouselInnerEl.clientWidth;
var currentIndex = 0;

// Tạo dot buttons
carouselBtnListEl.innerHTML = `<button class="btn"></button>`.repeat(itemCount);

var itemDatas = Array.from(slideItemEls).map(function(item, index) {
    return {
        id: index,
        el: item,
        translateX: -clientWidth * index // Phải là dấu âm để dịch sang trái
    };
});

var slideBtns = Array.from(carouselBtnListEl.children).map(function(btn, index) {
    return { id: index, el: btn };
});

setActiveState();

function setActiveState() {
    slideBtns[currentIndex].el.classList.add("active");
    carouselInnerEl.style.translate = itemDatas[currentIndex].translateX + "px";
    
    // Xử lý disable nút
    prevBtnEl.disabled = (currentIndex === 0);
    nextBtnEl.disabled = (currentIndex === itemCount - 1);
}

function removeActiveState() {
    slideBtns[currentIndex].el.classList.remove("active");
}

function changeSlide(index, force) {
    if (index === currentIndex && !force) return;
    if (index < 0) index = 0;
    if (index >= itemCount) index = itemCount - 1;

    removeActiveState();
    currentIndex = index;
    setActiveState();
}

// Event Listeners cho nút bấm
nextBtnEl.onclick = () => changeSlide(currentIndex + 1);
prevBtnEl.onclick = () => changeSlide(currentIndex - 1);

slideBtns.forEach((btn, index) => {
    btn.el.onclick = () => changeSlide(index);
});

// Xử lý Drag (Kéo thả)
carouselInnerEl.onmousedown = function(mouseDwEv) {
    mouseDwEv.preventDefault();
    addDragCssCarouselInner();
    
    var startX = mouseDwEv.clientX;
    var currentTranslateX = itemDatas[currentIndex].translateX;

    document.onmousemove = function(mouseMoveEv) {
        var moveX = mouseMoveEv.clientX - startX;
        carouselInnerEl.style.translate = (currentTranslateX + moveX) + "px";
    };

    document.onmouseup = function(mouseUpEv) {
        removeDragCssCarouselInner();
        document.onmousemove = null;
        
        var space = startX - mouseUpEv.clientX;
        
        // Nếu kéo đi hơn 1/3 chiều rộng thì chuyển slide
        if (Math.abs(space) > clientWidth / 3) {
            if (space > 0) changeSlide(currentIndex + 1);
            else changeSlide(currentIndex - 1);
        } else {
            changeSlide(currentIndex, true);
        }
        document.onmouseup = null;
    };
};

function addDragCssCarouselInner() {
    carouselInnerEl.style.cursor = "grabbing";
    carouselInnerEl.style.transition = "none";
}

function removeDragCssCarouselInner() {
    carouselInnerEl.style.cursor = "grab";
    carouselInnerEl.style.transition = "all 0.5s ease"; // Thêm lại transition để slide mượt
}