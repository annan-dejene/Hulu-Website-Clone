
const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outSideClick);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outSideClick(e) {
    console.log(e);
    console.log(modal);
    if (e.target == modal) closeModal();
}
