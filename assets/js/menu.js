document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".menu-boton");
  const menu = document.querySelector("#menu-principal");

  if (!boton || !menu) return;

  function abrirMenu() {
    menu.classList.add("abierto");
    boton.setAttribute("aria-expanded", "true");
    boton.setAttribute("aria-label", boton.dataset.cerrar);
  }

  function cerrarMenu() {
    menu.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-label", boton.dataset.abrir);
  }

  boton.addEventListener("click", () => {
    const abierto = boton.getAttribute("aria-expanded") === "true";

    if (abierto) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });

  menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      cerrarMenu();
    }
  });
});