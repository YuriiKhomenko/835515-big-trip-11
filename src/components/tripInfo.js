import {monthNames} from '../mock/consts.js';

export const createTripInfoTemplate = (trips, dates) => {
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
