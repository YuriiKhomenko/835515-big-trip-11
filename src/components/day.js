import {monthNames} from '../mock/consts.js';

export const createDayTemplate = (dateString, counter) => {
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
