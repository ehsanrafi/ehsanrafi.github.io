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
