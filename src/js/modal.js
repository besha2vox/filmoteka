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
    const template = `<div class="backdrop">
    <div class="modal">
    <button type="button" class="modal__close">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L22 22" stroke="black" stroke-width="2"/>
    <path d="M8 22L22 8" stroke="black" stroke-width="2"/>
    </svg>
    </button>
    ${markup}
    </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', template);
    document.body.classList.add('modal-open');
    this.elem = document.querySelector('.backdrop');
    this.closeIcon = document.querySelector('.modal__close');

    this.elem.addEventListener('click', this.onbackDropClose);
    this.closeIcon.addEventListener('click', this.onCloseClick);
    this.onShow();
  }

  close() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
    document.body.classList.remove('modal-open');
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
