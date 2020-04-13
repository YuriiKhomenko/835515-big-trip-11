const generateOffer = (offer) => {
  const {type, price} = offer;
  return (`<li class="event__offer">
            <span class="event__offer-title">${type}</span>
            +
            €&nbsp;<span class="event__offer-price">${price}</span>
            </li>`);
};

const generateOffersMarkup = (offersList) => {
  const offersMarkup = offersList.map((it) => generateOffer(it)).join(`\n`);
  return (`<ul class="event__selected-offers">
            ${offersMarkup}
          </ul>`);
};

export const createTripPointTemplate = (trip) => {
  const {type, pretext, city, offers, price, dates} = trip;
  return (`<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${type} ${pretext} ${city}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime=${dates.startTimeDate}>${dates.startTime}</time>
                        —
                        <time class="event__end-time" datetime=${dates.endTimeDate}>${dates.endTime}</time>
                      </p>
                      <p class="event__duration">${dates.difference}H 00M</p>
                    </div>

                    <p class="event__price">
                      €&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    ${generateOffersMarkup(offers)}
                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`);
};
