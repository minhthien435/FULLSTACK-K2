var settingsMenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}
darkBtn.onlick = function(){
    darkBtn.classList.toggle("dark-btn-on");
}