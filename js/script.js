document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector("#years");

  const update = () => element.textContent = ((new Date() - new Date("2004-10-06")) / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(8);
  
  update();
  setInterval(update, 100);
});

document.querySelectorAll('.folder-img').forEach(img => {
  img.addEventListener('click', () => {
    const folder = img.getAttribute('data-folder');
    const modal = document.getElementById(`modal-${folder}`);
    if (modal) modal.style.display = 'block';
  });
});

document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.addEventListener('click', e => {
    e.target.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
