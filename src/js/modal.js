// document.body.style.overflow = '';

export class Modal {
  constructor({ onShow, onClose }) {
    this.onShow = onShow;
    this.onClose = onClose;
    this.elem = null;
    this.closeIcon = null;
  }
  onClose() {}

  open(markup) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="backdrop">${markup}</div>`
    );
    document.body.style.overflow = 'hidden';
    this.elem = document.querySelector('.backdrop');
    this.closeIcon = document.querySelector('.modal-movie__close');

    this.elem.addEventListener('click', this.onbackDropClose);
    this.closeIcon.addEventListener('click', this.onCloseClick);
    this.onShow();
  }

  close() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
    document.body.style.overflow = '';
    console.log('this.onClose();', this.onClose);
    this.onClose();
  }

  onbackDropClose = e => {
    if (!e.target.classList.contains('backdrop')) return;
    this.close();
  };

  onCloseClick = e => {
    this.close();
  };
}
