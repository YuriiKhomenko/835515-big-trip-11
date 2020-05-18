import {monthNames} from '../mock/consts.js';
import {createNodeElement} from './util.js';

const createTripInfoTemplate = (trips, dates) => {
  const cities = [...new Set(trips.map((it) => it.city))]
    .sort((currentCity, nextCity) => currentCity.localeCompare(nextCity))
    .join(` \u2013 `);
  const start = new Date(dates[0]);
  const end = new Date(dates[dates.length - 1]);
  return (`<div class="trip-info__main">
              <h1 class="trip-info__title">${cities}</h1>

              <p class="trip-info__dates">${monthNames[start.getMonth() + 1]} ${start.getDate()}&nbsp;—&nbsp;${monthNames[end.getMonth() + 1]} ${end.getDate()}</p>
            </div>`);
};

export default class TripInfo {
  constructor(trips, dates) {
    this._trips = trips;
    this._dates = dates;
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate(this._trips, this._dates);
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
