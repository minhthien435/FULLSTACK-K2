const buttons = document.querySelectorAll(".nav-btn");
buttons.forEach(btn=>{
    btn.addEventListener("click",function(){
        const targetId = this.getAttribute("data-target");
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior:"smooth",
            block:"start", // back to top
        });
    });
});
