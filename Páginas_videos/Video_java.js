// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada con éxito");
  
    // Agrega una animación de entrada al desplazarse
    const elements = document.querySelectorAll(".image-container img, .video-container video");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeIn 2s";
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach(element => observer.observe(element));
  });
  