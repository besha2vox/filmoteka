import { getTranding } from '../index.js';

export class LanguageSwitcher {
  constructor({ switcher, checkbox, language }) {
    this.LANG_STORAGE_KEY = 'lang';
    this.element = switcher;
    this.checkbox = checkbox;
    this.language = language;
    this.langs = {
      UA: 'uk-UK',
      EN: 'en-US',
    };
  }

  onLanguageChange = () => {
    const isUaLang = this.getBoolean();

    if (isUaLang) {
      localStorage.setItem(this.LANG_STORAGE_KEY, this.langs.EN);
    }

    if (!isUaLang) {
      localStorage.setItem(this.LANG_STORAGE_KEY, this.langs.UA);
    }

    this.renderLang();
    return;
  };

  renderLang() {
    const isUaLang = this.getBoolean();

    if (!isUaLang) {
      this.checkbox.setAttribute('checked', true);
      this.changeSwitcherClass(this.langs.EN, this.langs.UA);
      this.language.innerHTML = 'EN';

      toggleBodyClass(isUaLang);
      getTranding();
    }

    if (isUaLang) {
      this.changeSwitcherClass(this.langs.UA, this.langs.EN);
      this.language.innerHTML = 'UA';

      toggleBodyClass(isUaLang);
      getTranding();
    }
  }

  changeSwitcherClass(add, remove) {
    this.element.classList.add(add);
    this.element.classList.remove(remove);
  }

  getBoolean() {
    const storageLang = localStorage.getItem(this.LANG_STORAGE_KEY);
    return storageLang === this.langs.UA || !storageLang;
  }
}

function toggleBodyClass(isUaLang) {
  console.log('isUaLang', isUaLang);
  if (isUaLang) changeBodyClass('en', 'uk');
  if (!isUaLang) changeBodyClass('uk', 'en');
}

function changeBodyClass(oldClass, newClass) {
  if (document.body.classList.contains(oldClass))
    document.body.classList.remove(oldClass);
  document.body.classList.add(newClass);
}
