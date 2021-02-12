const textoSuperior = document.getElementById("textoSuperior");
const ingresoTitulo = document.getElementById("ingresoTitulo");
const textoInferior = document.getElementById("textoInferior");
const texInferior = document.getElementById("texInferior");
const topCheck = document.getElementById("top-check");
const topCheckInf = document.getElementById("top-check-2");
const estiloFuente = document.getElementById("estilosDeFuentes");
const tamañoLetra = document.getElementById("tamañoLetra");
const izquierda = document.getElementById("izquierda");
const derecha = document.getElementById("derecha");
const centrar = document.getElementById("centrar");
const colorLetra = document.getElementById("colorLetra");
const textoColor = document.getElementById("textoColor");
const colorFondo = document.getElementById("colorFondo");
const colorLabelFondo = document.getElementById("colorLaberFondo");
const contornoVacio = document.getElementById("contornoVacio");
const contornoClaro = document.getElementById("contornoClaro");
const contornoOscuro = document.getElementById("contornoOscuro");
const espaciado = document.getElementById("espaciadoValue");
const interlineado = document.getElementById("interlineadoValue");
const asideImagen = document.getElementById("asideImagen");
const asideTexto = document.getElementById("asideTexto");
const cajaPrincipal = document.getElementById("cajaPrincipal");



// Modificaciones Texto

ingresoTitulo.addEventListener(`keyup`,()=>{
    textoSuperior.innerHTML=ingresoTitulo.value;
});

texInferior.addEventListener(`keyup`,()=>{
    textoInferior.innerHTML=texInferior.value;
});



topCheck.addEventListener('change', () => {
    if (topCheck.checked === true) {
        textoSuperior.style.display = 'none';
    } else {
        textoSuperior.style.display = 'block';
    }
});

topCheckInf.addEventListener('change', () => {
    if (topCheckInf.checked === true) {
        textoInferior.style.display = 'none';
    } else {
        textoInferior.style.display = 'block';
    }
});



estiloFuente.addEventListener('change', (e) => {
    const fuente = e.target.value;
    textoSuperior.style.fontFamily = `${fuente}`;
    textoInferior.style.fontFamily = `${fuente}`;
    // if (fuente === 'arial') {
    //     textoSuperior.style.fontFamily = 'arial';
    //     textoInferior.style.fontFamily = 'arial';
    // } else if (fuente === 'arial-black') {
    //     textoSuperior.style.fontFamily = 'Arial Black';
    //     textoInferior.style.fontFamily = 'Arial Black';
    // } else if (fuente === 'american-type') {
    //     textoSuperior.style.fontFamily = `American Typewriter`;
    //     textoInferior.style.fontFamily = `American Typewriter`;
    // } else if (fuente === 'andale-mono') {
    //     textoSuperior.style.estiloFuente = `Andale Mono`;
    //     textoInferior.style.estiloFuente = `Andale Mono`;
    // } else if (fuente === 'helvetica') {
    //     textoSuperior.style.estiloFuente = `Helvetica`;
    //     textoInferior.style.estiloFuente = `Helvetica`;
    // } else if (fuente === 'impact') {
    //     textoSuperior.style.estiloFuente = `Impact`;
    //     textoInferior.style.estiloFuente = `Impact`;
    // } 
});


tamañoLetra.addEventListener('change', (e) => {
    const size = e.target.value;
    textoSuperior.style.fontSize = `${size}px`;
    textoInferior.style.fontSize = `${size}px`;
});


izquierda.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'left';
    textoInferior.style.textAlign = 'left';
  });
  
derecha.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'right';
    textoInferior.style.textAlign = 'right';
  });
  
centrar.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'center';
    textoInferior.style.textAlign = 'center';
  });



colorLetra.addEventListener('input', (e) =>{
    const colorTexto = e.target.value;
    textoSuperior.style.color = colorTexto;
    textoInferior.style.color = colorTexto;
    textoColor.innerText = `${colorTexto}`;
  })
  
  
  
  fondoLabel.addEventListener('input', (e) =>{
    const colorFondo = e.target.value;
    textoSuperior.style.backgroundColor = colorFondo;
    textoInferior.style.backgroundColor = colorFondo;
    colorLabelFondo.innerText = `${colorFondo}`;
  })

  function actualizarFondoTexto() {
    if (!transparente.checked) {
      const color = fondoLabel.value
      fondoLabel.innerText = color.toUpperCase()
      textoSuperior.style.backgroundColor = color
      textoInferior.style.backgroundColor = color
      textoSuperior.style.position=''
    }else {
      textoSuperior.style.backgroundColor = 'transparent'
      textoInferior.style.backgroundColor = 'transparent'
      textoSuperior.style.position='absolute'
    }
  }




  contornoClaro.addEventListener(`click`, (e) =>{
      e.preventDefault();
      textoSuperior.style.textShadow = "2px 2px #FFF, -2px -2px #FFF,  2px 2px #FFF, -2px -2px #FFF, 2px 2px #FFF";
      textoInferior.style.textShadow = "2px 2px #FFF, -2px -2px #FFF,  2px 2px #FFF, -2px -2px #FFF, 2px 2px #FFF"; 
  })  

  contornoOscuro.addEventListener(`click`, (e) =>{
    e.preventDefault();
    textoSuperior.style.textShadow = "2px 2px #000, -2px -2px #000,  2px 2px #000, -2px -2px #000, 2px 2px #000";
    textoInferior.style.textShadow = "2px 2px #000, -2px -2px #000,  2px 2px #000, -2px -2px #000, 2px 2px #000"; 
 })  

 contornoVacio.addEventListener(`click`, (e) =>{
    e.preventDefault();
    textoSuperior.style.textShadow = "none";
    textoInferior.style.textShadow = "none"; 
 })  

 espaciado.addEventListener('change', (e) => {
    const espLinea = e.target.value; 
    textoSuperior.style.padding = `${espLinea}px 15px`;
    textoInferior.style.padding = `${espLinea}px 15px`;
    textoSuperior.style.marginTop = '0';
});

interlineado.addEventListener('change', (e) => {
    const entreLinea = e.target.value;
    textoSuperior.style.lineHeight = `${entreLinea}`;
    textoInferior.style.lineHeight = `${entreLinea}`;
    textoSuperior.style.marginTop = '0';
});


// /Cambio de boton texto a boton imagen


showImageAtributes();
function showImageAtributes(){
  asideTexto.style.display= 'none';
  asideImagen.style.display = '';
  cajaPrincipal.style.width="80%";
}

function showTextAtributes(){
  asideImagen.style.display='none';
  asideTexto.style.display= ''; 
  cajaPrincipal.style.width="80%";
}

