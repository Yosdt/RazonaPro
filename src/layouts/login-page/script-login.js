const container = document.getElementById("container");
const inicio = document.getElementById("inicio");
const registro = document.getElementById("registro");

inicio.addEventListener("click",()=>{
    container.classList.add("toggle")
})
registro.addEventListener("click",()=>{
    container.classList.remove("toggle")
})



