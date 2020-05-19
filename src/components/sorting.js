import {createNodeElement} from './util.js';

const createSortingMarkup = (type, isChecked) => {
  const attribute = type.toLowerCase();
  const checked = isChecked ? `checked` : ``;
  return (
    `<div class="trip-sort__item  trip-sort__item--${attribute}">
          <input id="sort-${attribute}"
          class="trip-sort__input
          visually-hidden"
          type="radio"
          name="trip-sort"
          value="sort-${attribute}"
          ${checked}>
          <label class="trip-sort__btn" for="sort-${attribute}">
            ${type}
            <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>
          </label>
      </div>`
  );
};

const createSortingTemplate = (sortingTypes) => {
  const sortingMarkup = sortingTypes.map((it, i) => createSortingMarkup(it, i === 0)).join(`\n`);
  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <span class="trip-sort__item  trip-sort__item--day">Day</span>
            ${sortingMarkup}
            <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
            </div>
          </form>`);
};

export default class Sorting {
  constructor(sortingTypes) {
    this._sortingTypes = sortingTypes;
    this._element = null;
  }

  getTemplate() {
    return createSortingTemplate(this._sortingTypes);
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
