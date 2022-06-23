const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton);
  const modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener('click', () => {
      modalContainer.classList.add('show-modal');
    });
  }
};
showModal('open-modal', 'modal-container');
const closeBtn = document.querySelectorAll('.close-modal');

function closeModal() {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.classList.remove('show-modal');
}
closeBtn.forEach((c) => c.addEventListener('click', closeModal));
