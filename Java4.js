console.log("Portafolio cargado");

// Menú de navegación
document.querySelector('.menu-icon').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
});
