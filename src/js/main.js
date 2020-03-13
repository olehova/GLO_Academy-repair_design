/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
        modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', () => {
      modal.classList.add('modal--visible');
    });
  });
  
  closeBtn.addEventListener('click', switchModal);

  // modal.addEventListener('keydown', (ev) => {
  //   if(ev.keyCode == 27) {
  //     switchModal();
  //   }
  // });
});
