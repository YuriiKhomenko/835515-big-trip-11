import {createNodeElement} from './util.js';

const createFilterMarkup = (filterName, isChecked) => {
  return (`<div class="trip-filters__filter">
              <input id="filter-${filterName.toLowerCase()}"
              class="trip-filters__filter-input  visually-hidden"
              type="radio"
              name="trip-filter"
              value="${filterName.toLowerCase()}"
              ${isChecked ? `checked` : ``}>
              <label class="trip-filters__filter-label" for="filter-${filterName.toLowerCase()}">${filterName}</label>
            </div>`);
};


const createFiltersTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (`<form class="trip-filters" action="#" method="get">
          ${filtersMarkup}
          <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`);
};

export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
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
