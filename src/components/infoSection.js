import {createNodeElement} from './util.js';

const createSectionWithInfoTemplate = () => {
  return (`<section class="trip-main__trip-info  trip-info">
          </section>`);
};

export default class InfoSection {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSectionWithInfoTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createNodeElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
