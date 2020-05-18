import {createNodeElement} from './util.js';

const createNavigationFieldMarkup = (navigationType, active) => {
  const status = active ? `trip-tabs__btn--active` : ``;
  return (
    `<a class="trip-tabs__btn  ${status}" href="#">${navigationType}</a>`
  );
};

const createNavigationTemplate = (navigationFields) => {
  const navigationFieldsMarkup = navigationFields.map((it, i) => createNavigationFieldMarkup(it, i === 0)).join(`\n`);
  return (`<nav class="trip-controls__trip-tabs  trip-tabs">
            ${navigationFieldsMarkup}
          </nav>`);
};

export default class Navigation {
  constructor(navigationTypes) {
    this._navigationTypes = navigationTypes;
    this._element = null;
  }

  getTemplate() {
    return createNavigationTemplate(this._navigationTypes);
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
