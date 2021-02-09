const textoSuperior = document.getElementById("textoSuperior");
const ingresoTitulo = document.getElementById("ingresoTitulo");
const textoInferior = document.getElementById("textoInferior");
const texInferior = document.getElementById("texInferior");


ingresoTitulo.addEventListener(`keyup`,()=>{
    textoSuperior.innerHTML=ingresoTitulo.value;
})

texInferior.addEventListener(`keyup`,()=>{
    textoInferior.innerHTML=texInferior.value;
})



