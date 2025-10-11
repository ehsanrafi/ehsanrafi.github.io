document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector("#years");

    const update = () => element.textContent = ((new Date() - new Date("2004-10-06")) / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(8);
    
    update();
    setInterval(update, 100);
});

document.querySelectorAll(".folder-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
  });
});

// --- Modal de Certificados ---
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("certModal");
    const closeBtn = modal.querySelector(".close");
    const certTriggers = document.querySelectorAll(".cert-trigger");
    const certList = modal.querySelector(".cert-list");

    // Abrir modal al pulsar en cualquier thumbnail
    certTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });

    // Cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar al hacer clic fuera del modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Abrir PNG del certificado
    certList.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", () => {
            const certPath = item.getAttribute("data-cert");
            window.open(certPath, "_blank");
        });
    });
});
