const monthNames = [`JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, `JUL`, `AUG`, `SEP`, `OCT`, `NOV`, `DEC`];

const createDayTemplate = (date, index) => {
  const month = date.slice(6, 7);
  const day = date.slice(8, 10);
  return (`<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${index + 1}</span>
                <time class="day__date" datetime="${date}">${monthNames[month]} ${day}</time>
              </div>
              <ul class="trip-events__list">
              </ul>
            </li>`);
};

const generateUniqueDays = (tripList) => {
  const uniqueDatesSet = new Set();
  tripList.forEach((trip) => {
    uniqueDatesSet.add(trip.date);
  });
  const uniqueDates = Array.from(uniqueDatesSet);
  return uniqueDates;
};

export {createDayTemplate, generateUniqueDays};
