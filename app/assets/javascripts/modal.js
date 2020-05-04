let modal, settingsBtn, closeBtn, save;
modal = document.querySelector("#settings-modal");
settingsBtn = document.querySelector("#settings-icon");
closeBtn = document.querySelector("#close-settings-btn");
save = document.querySelector('#settings-save');

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

settingsBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
save.addEventListener('click', toggleModal);
