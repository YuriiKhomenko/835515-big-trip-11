import NavigationComponent from './components/navigation.js';
import FiltersComponent from './components/filter.js';
import SortingComponent from './components/sorting.js';
import EditFormComponent from './components/editForm.js';
import DayListComponent from './components/daysList.js';
import DayComponent from './components/day.js';
import TripPointComponent from './components/tripPoint.js';
import InfoSectionComponent from './components/infoSection.js';
import TripInfoComponent from './components/tripInfo.js';
import TripCostComponent from './components/tripCost.js';
import {tripItems, dates} from './mock/trips.js';
import {navigationTypes, filters, sortTypes} from './mock/consts.js';
import {render, RenderPosition} from './components/util.js';

const tripMain = document.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

render(tripControls, new NavigationComponent(navigationTypes).getElement(), RenderPosition.BEFOREEND);
render(tripControls, new FiltersComponent(filters).getElement(), RenderPosition.BEFOREEND);
render(tripEvents, new SortingComponent(sortTypes).getElement(), RenderPosition.BEFOREEND);
render(tripEvents, new DayListComponent().getElement(), RenderPosition.BEFOREEND);
render(tripMain, new InfoSectionComponent().getElement(), RenderPosition.AFTERBEGIN);
render(document.querySelector(`.trip-info`), new TripInfoComponent(tripItems, dates).getElement(), RenderPosition.BEFOREEND);
render(document.querySelector(`.trip-info`), new TripCostComponent(tripItems).getElement(), RenderPosition.BEFOREEND);

dates.forEach((date, index) => {
  const day = new DayComponent(date, index + 1).getElement();

  tripItems
    .filter((trip) => new Date(trip.startDate).toISOString().slice(0, 10) === date)
    .forEach((trip, i) => {
      if (i === 0) {
        render(day.querySelector(`.trip-events__list`), new EditFormComponent(trip).getElement(), RenderPosition.BEFOREEND);
      }
      render(day.querySelector(`.trip-events__list`), new TripPointComponent(trip).getElement(), RenderPosition.BEFOREEND);
    });

  render(document.querySelector(`.trip-days`), day.parentElement, RenderPosition.BEFOREEND);
});
