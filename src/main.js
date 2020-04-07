import {createNavigationTemplate} from './components/navigation.js';
import {createFiltersTemplate} from './components/filter.js';
import {createSortingTemplate} from './components/sorting.js';
import {createEditFormTemplate} from './components/editForm.js';
import {createDaysListTemplate} from './components/daysList.js';
import {createDayTemplate} from './components/day.js';
import {createTripPointTemplate} from './components/tripPoint.js';
import {createSectionWithInfoTemplate} from './components/infoSection.js';
import {createTripInfoTemplate} from './components/tripInfo.js';
import {createTripCostTemplate} from './components/tripCost.js';

const TRIP_ITEMS_NUMBER = 3;
const tripMain = document.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(tripControls, createNavigationTemplate());
render(tripControls, createFiltersTemplate());
render(tripEvents, createSortingTemplate());
render(tripEvents, createEditFormTemplate());
render(tripEvents, createDaysListTemplate());
render(document.querySelector(`.trip-days`), createDayTemplate());

for (let i = 0; i < TRIP_ITEMS_NUMBER; i++) {
  render(document.querySelector(`.trip-events__list`), createTripPointTemplate());
}

render(tripMain, createSectionWithInfoTemplate(), `afterbegin`);
render(document.querySelector(`.trip-info`), createTripInfoTemplate());
render(document.querySelector(`.trip-info`), createTripCostTemplate());
