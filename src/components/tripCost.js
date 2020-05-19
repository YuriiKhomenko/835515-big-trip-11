import {createNodeElement} from './util.js';

const createTripCostTemplate = (trips) => {
  const cost = trips.reduce((acc, current) => acc + current.price, 0);
  return (`<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${cost}</span>
            </p>`);
};

export default class TripsCost {
  constructor(trips) {
    this._trips = trips;
    this._element = null;
  }

  getTemplate() {
    return createTripCostTemplate(this._trips);
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
