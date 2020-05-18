import {createNodeElement} from './util.js';

const generateOffer = (offer) => {
  const {type, price, isChecked} = offer;
  if (isChecked) {
    return (`<li class="event__offer">
            <span class="event__offer-title">${type}</span>
            +
            €&nbsp;<span class="event__offer-price">${price}</span>
            </li>`);
  } else {
    return ``;
  }
};

const generateOffersMarkup = (offers) => {
  const offersMarkup = offers.map((it) => generateOffer(it)).join(`\n`);
  return (`<ul class="event__selected-offers">
            ${offersMarkup}
          </ul>`);
};

const createTripPointTemplate = (trip) => {
  const {type, action, city, offers, price} = trip;
  const startDate = new Date(trip.startDate);
  const endDate = new Date(trip.endDate);
  const offersMarkup = generateOffersMarkup(offers);
  const dateDifference = new Date(endDate - startDate);
  const hours = dateDifference.getHours() - 1;
  const minutes = dateDifference.getMinutes();
  const transformedHours = hours > 0 ? `${hours}H` : ``;
  return (`<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${type} ${action} ${city}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime=${startDate.toISOString().slice(0, 16)}>${startDate.toISOString().slice(11, 16)}</time>
                        —
                        <time class="event__end-time" datetime=${endDate.toISOString().slice(0, 16)}>${endDate.toISOString().slice(11, 16)}</time>
                      </p>
                      <p class="event__duration">${transformedHours} ${minutes}M</p>
                    </div>

                    <p class="event__price">
                      €&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    ${offersMarkup}
                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`);
};

export default class TripPoint {
  constructor(trip) {
    this._trip = trip;
    this._element = null;
  }

  getTemplate() {
    return createTripPointTemplate(this._trip);
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
