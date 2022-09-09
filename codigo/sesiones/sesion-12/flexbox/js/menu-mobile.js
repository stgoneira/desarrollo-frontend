document.addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("button.btn-menu-mobile").addEventListener("click", (be) => {
        document.getElementById("menu-mobile").style.display = "block"; 
    });

    document.querySelector("button.menu-mobile-close").addEventListener("click", (be) => {
        document.getElementById("menu-mobile").style.display = "none"; 
    });
    
});