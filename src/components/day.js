import {monthNames} from '../mock/consts.js';
import {createNodeElement} from './util.js';

const createDayTemplate = (dateString, counter) => {
  const date = new Date(dateString);
  const month = monthNames[date.getMonth() + 1];
  const day = date.getDate();
  return (`<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${counter}</span>
                <time class="day__date" datetime="${dateString}">${month} ${day}</time>
              </div>
              <ul class="trip-events__list">
              </ul>
            </li>`);
};

export default class Day {
  constructor(day, counter) {
    this._day = day;
    this._counter = counter;
    this._element = null;
  }

  getTemplate() {
    return createDayTemplate(this._day, this._counter);
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
