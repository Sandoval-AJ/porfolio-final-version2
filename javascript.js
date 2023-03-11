const open = document.getElementById("contacto");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

open.addEventListener("click", function(){
    modal.style.display = "flex";
})
close.addEventListener("click", function(){
    modal.style.display = "none";
})