let menuVisible = false;
let skillsAnimadas = false;

// Cacheamos elementos que usamos varias veces
const nav = document.getElementById("nav");
const skillsSection = document.getElementById("skills");

// Función que oculta o muestra el menú en móvil
function mostrarOcultarMenu() {
    menuVisible = !menuVisible;
    if (menuVisible) {
        nav.classList.add("responsive");
    } else {
        nav.classList.remove("responsive");
    }
}

// Ocultar menú cuando selecciono una opción
function seleccionar() {
    nav.classList.remove("responsive");
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    if (!skillsSection || skillsAnimadas) return;

    const distancia_skills = window.innerHeight - skillsSection.getBoundingClientRect().top;

    // Cuando la sección entra suficientemente en la vista
    if (distancia_skills >= 300) {
        const habilidades = document.getElementsByClassName("progreso");
        if (habilidades.length >= 12) {
            habilidades[0].classList.add("html");
            habilidades[1].classList.add("react");
            habilidades[2].classList.add("angular");
            habilidades[3].classList.add("typescript");
            habilidades[4].classList.add("apirest");
            habilidades[5].classList.add("git");
            habilidades[6].classList.add("sql");
            habilidades[7].classList.add("spring");
            habilidades[8].classList.add("dotnet");
            habilidades[9].classList.add("python");
            habilidades[10].classList.add("docker");
            habilidades[11].classList.add("micro");
        }
        skillsAnimadas = true; // solo una vez
    }
}

// Detecto el scroll para aplicar la animación de skills
window.addEventListener("scroll", efectoHabilidades);

// Por si ya están visibles al cargar (ej. refresco en medio de la página)
window.addEventListener("load", efectoHabilidades);

const button = document.getElementById("themeToggle");

button.addEventListener("click", () => {
  const body = document.body;
  const current = body.getAttribute("data-theme");

  if (current === "dark") {
    body.setAttribute("data-theme", "light");
    button.innerHTML = `<i class="fa-regular fa-moon"></i>`;
  } else {
    body.setAttribute("data-theme", "dark");
    button.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});