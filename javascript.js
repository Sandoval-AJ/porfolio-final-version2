const open = document.getElementById("contacto");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

open.addEventListener("click", function(){
    modal.style.display = "flex";
})
close.addEventListener("click", function(){
    modal.style.display = "none";
})
//reloj o intento de reloj
const currentTime = () => {
    const el = document.getElementById("time");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss}`;
    el.innerText = time;
};
currentTime();
setInterval(currentTime, 1000);