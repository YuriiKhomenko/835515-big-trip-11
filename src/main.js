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
import {tripItems, dates} from './mock/trips.js';
import {navigationTypes, filters, sortTypes} from './mock/consts.js';

const tripMain = document.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const createNodeElement = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element.firstChild;
};

render(tripControls, createNavigationTemplate(navigationTypes));
render(tripControls, createFiltersTemplate(filters));
render(tripEvents, createSortingTemplate(sortTypes));
render(tripEvents, createDaysListTemplate());
render(tripMain, createSectionWithInfoTemplate(), `afterbegin`);
render(document.querySelector(`.trip-info`), createTripInfoTemplate(tripItems, dates));
render(document.querySelector(`.trip-info`), createTripCostTemplate(tripItems));
render(tripEvents, createDaysListTemplate());
render(document.querySelector(`.trip-sort`), createEditFormTemplate(tripItems[0]), `afterend`);


dates.forEach((date, index) => {
  const day = createNodeElement(createDayTemplate(date, index + 1));

  tripItems
    .filter((trip) => new Date(trip.startDate).toISOString().slice(0, 10) === date)
    .forEach((trip) => {
      render(day.querySelector(`.trip-events__list`), createTripPointTemplate(trip));
    });

  render(document.querySelector(`.trip-days`), day.parentElement.innerHTML);
});
