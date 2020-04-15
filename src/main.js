import {createNavigationTemplate} from './components/navigation.js';
import {createFiltersTemplate} from './components/filter.js';
import {createSortingTemplate} from './components/sorting.js';
import {createEditFormTemplate} from './components/editForm.js';
import {createDaysListTemplate} from './components/daysList.js';
import {createDayTemplate, generateUniqueDays} from './components/day.js';
import {createTripPointTemplate} from './components/tripPoint.js';
import {createSectionWithInfoTemplate} from './components/infoSection.js';
import {createTripInfoTemplate} from './components/tripInfo.js';
import {createTripCostTemplate} from './components/tripCost.js';
import {generateTrips} from './mock/trips.js';
import {navigationTypes} from './mock/navigation.js';
import {filters} from './mock/filter.js';
import {sortTypes} from './mock/sorts.js';

const TRIP_ITEMS_NUMBER = 5;
const tripMain = document.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

const tripItems = generateTrips(TRIP_ITEMS_NUMBER);
const uniqueDays = generateUniqueDays(tripItems);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(tripControls, createNavigationTemplate(navigationTypes));
render(tripControls, createFiltersTemplate(filters));
render(tripEvents, createSortingTemplate(sortTypes));
render(tripEvents, createEditFormTemplate(tripItems[0]));
render(tripEvents, createDaysListTemplate());
render(tripMain, createSectionWithInfoTemplate(), `afterbegin`);
render(document.querySelector(`.trip-info`), createTripInfoTemplate());
render(document.querySelector(`.trip-info`), createTripCostTemplate());

uniqueDays.forEach((day, i) => {
  render(document.querySelector(`.trip-days`), createDayTemplate(day, i));
  tripItems.forEach((trip) => {
    if (trip.date === day) {
      render(document.querySelector(`.trip-events__list`), createTripPointTemplate(trip));
    }
  });
});
