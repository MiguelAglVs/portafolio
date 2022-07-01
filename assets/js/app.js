const seccionesPagina = new fullpage("#fullpage", {
  // ──────────────────────────────────────────────────
  //   :::::: Opciones Basicas
  // ──────────────────────────────────────────────────
  autoScrolling: true, // Se activa el scroll.
  fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
  fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
  easing: "easeInOutCubic", // Funcion de tiempo de la animacion.
  scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
  css3: true, // Si usara CSS3 o javascript.
  easingcss3: "ease-out", // Curva de velocidad del efecto.
  loopBottom: true, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
  // ──────────────────────────────────────────────────
  //   :::::: Barra de navegación
  // ──────────────────────────────────────────────────
  navigation: false, // Muesta la barra de navegación.
  menu: "#menu", // Menu de navegación.
  anchors: ["inicio", "sobremi", "portafolio", "contacto"], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
  navigationTooltips: ["Inicio", "Sobre mi", "Portafolio", "Contacto"], // Tooltips que mostrara por cada boton.
  showActiveTooltip: false, // Mostrar tooltip activa.
  // ──────────────────────────────────────────────────
  //   :::::: Secciones
  // ──────────────────────────────────────────────────
  sectionsColor: ["#000", "#f2f2f2", "#f2f2f2", "#000"], // Color de fondo de cada seccion.
  verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
});

const typed = new Typed(".typed", {
  strings: ['<i class="texto">Developer</i>', '<i class="texto">Designer</i>'],

  //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});

const textsToChange = document.querySelectorAll("[data-section]");

const chageLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

let selectElement = document.querySelector(".idioma");
selectElement.addEventListener("change", (e) => {
  chageLanguage(e.target.value);
});




