import {createNodeElement} from './util.js';

const createDaysListTemplate = () => {
  return (`<ul class="trip-days">
          </ul>`);
};

export default class DayList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createDaysListTemplate();
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
