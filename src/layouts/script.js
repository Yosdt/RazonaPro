const home = document.getElementById("home");
const barralateral = document.getElementById("barra-lateral");
const spans = document.querySelectorAll("span");
const main = document.getElementById("main");
const header = document.getElementById("header");

home.addEventListener("click",()=>{
    barralateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("mini-main-i")
    header.classList.toggle("mini-main")
    spans.forEach((span)=>{
        span.classList.toggle("oculto")
    });
})