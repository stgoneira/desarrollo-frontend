document.addEventListener("DOMContentLoaded", (e) => {
    
    document.querySelector("button.mobile-menu").addEventListener("click", (ec) => {
        document.getElementById("menu").style.display = "block";
    });    

    document.querySelector("button.mobile-menu-close").addEventListener("click", (ec) => {
        document.getElementById("menu").style.display = "none";
    });    
});