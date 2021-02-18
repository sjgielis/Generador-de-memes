const textoSuperior = document.getElementById("textoSuperior");
const ingresoTitulo = document.getElementById("ingresoTitulo");
const textoInferior = document.getElementById("textoInferior");
const texInferior = document.getElementById("texInferior");
const textoCentro = document.getElementById("textoCentro");
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
const urlImagen = document.getElementById("urlImagen");
const colorImagen = document.getElementById("colorImagen");
const colorImagenSpan = document.getElementById("colorImagenSpan");
const opcionesFondo = document.getElementById("opcionesFondo");
const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const escalaGrises = document.getElementById("escalaGrises");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");
const resetFiltros = document.getElementById("resetFiltros");
const cerrar = document.getElementById("cerrar");
const cerrarTexto = document.getElementById("cerrarTexto");
const botonDescarga = document.getElementById("botonDescarga");
const nueva = document.getElementById("nueva");


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

// Cambio en el estilo de la fuente

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

// Tipo de centrado del texo


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

// Cambio del color de letra

colorLetra.addEventListener('input', (e) =>{
    const colorTexto = e.target.value;
    textoSuperior.style.color = colorTexto;
    textoInferior.style.color = colorTexto;
    textoColor.innerText = `${colorTexto}`;
  })
  
// Cambio en el color del fondo del texto  
  
  fondoLabel.addEventListener('input', (e) =>{
    const colorFondo = e.target.value;
    textoSuperior.style.backgroundColor = colorFondo;
    textoInferior.style.backgroundColor = colorFondo;
    colorLabelFondo.innerText = `${colorFondo}`;
  })


// transparencia 

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

//   Cambios de contorno del texto


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


// Ingreso de imagen

urlImagen.addEventListener('keyup', (e) => {
    textoCentro.style.backgroundImage = `url(${e.target.value})`;
})
  
 
//Color del fondo de la imagen


colorImagen.addEventListener('input', (e) => {
    textoCentro.style.backgroundColor = `${e.target.value}`;
    colorImagenSpan.innerText = `${e.target.value}`;
})


// //Tipo de fondo de la imagen


const actualizarColorMezcla = (e) => {
    colorImagenSpan.innerText = e.target.value.toUpperCase()
    textoCentro.style.backgroundColor = e.target.value
  }
  
  const actualizarTipoMezcla = (e) => {
    textoCentro.style.backgroundBlendMode = e.target.value
  }
  
  colorImagenSpan.addEventListener('input', actualizarColorMezcla)
  opcionesFondo.addEventListener('change', actualizarTipoMezcla)


//Ajuste de brillo

const filter = () => {
    textoCentro.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escalaGrises.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
};

brillo.addEventListener('change', filter);

opacidad.addEventListener('change', filter);

contraste.addEventListener('change', filter);

desenfoque.addEventListener('change', filter);

escalaGrises.addEventListener('change', filter);

sepia.addEventListener('change', filter);

hue.addEventListener('change', filter);

saturado.addEventListener('change', filter);

negativo.addEventListener('change', filter);


//Boton para reestablecer filtros


resetFiltros.addEventListener('click', (e) => {
    e.preventDefault();
    brillo.value = 1;
    opacidad.value = 1;
    contraste.value = 100;
    desenfoque.value = 0;
    escalaGrises.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturado.value = 100;
    negativo.value = 0;
    filter();
});
  
// Modo claro-oscuro


const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');
load();


bdark.addEventListener('click', e =>{
  body.classList.toggle('darkmode');
  store(body.classList.contains('darkmode'));
  load()
});

function load(){
    const darkmode = localStorage.getItem('darkmode');
    if (darkmode == 'false'){
      bdark.innerText='🌜 Modo Oscuro';
      asideImagen.style.backgroundColor = '#f09319'
      asideTexto.style.backgroundColor = '#f09319'
      store('false');
    }else if (darkmode == 'true'){
      bdark.innerText='🌞 Modo Claro';
        asideImagen.style.backgroundColor = '#292626' 
        asideTexto.style.backgroundColor = '#292626' 
        body.classList.add('darkmode');
        store('true')
    };  
}

function store(value){
    localStorage.setItem('darkmode', value);
};

//Boton cerrar Imagen

cerrar.addEventListener("click", function(){
    let asides = document.getElementsByTagName('aside');
    for(let i=0; i<asides.length; i++)
    {
      asides[i].style.display="none";
      cajaPrincipal.style.width="100%";
    }
  });
  

  
  //Boton cerrar texto
  
 cerrarTexto.addEventListener("click", function(){
    let asides = document.getElementsByTagName('aside');
    for(let i=0; i<asides.length; i++)
    {
      asides[i].style.display="none";
      cajaPrincipal.style.width="100%";
    }
  });


  //Botón de descarga
 
  
botonDescarga.addEventListener('click', (e) => {
    descarga()
});
 const descarga = () =>{

 domtoimage.toBlob(document.getElementById('cajaSeccion'))
    .then(function (blob) {
        window.saveAs(blob, 'mi-meme.png');
    });
 };


 //Responsive

 const panelResponsive = () => {
    if (window.screen.width <= 700) {
        nueva.classList.add('responsive');
    } else {
        nueva.classList.remove('responsive');
    }
};