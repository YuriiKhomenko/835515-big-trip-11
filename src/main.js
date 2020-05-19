import NavigationComponent from './components/navigation.js';
import FiltersComponent from './components/filter.js';
import SortingComponent from './components/sorting.js';
import EditTripComponent from './components/editTrip.js';
import DayListComponent from './components/daysList.js';
import DayComponent from './components/day.js';
import TripPointComponent from './components/tripPoint.js';
import InfoSectionComponent from './components/infoSection.js';
import TripInfoComponent from './components/tripInfo.js';
import TripCostComponent from './components/tripCost.js';
import NoPointsComponent from './components/no-points.js';
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

const renderTrip = (dayElement, trip) => {
  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToTrip();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const replaceTripToEdit = () => {
    dayElement.replaceChild(tripEditComponent.getElement(), tripPoint.getElement());
  };

  const replaceEditToTrip = () => {
    dayElement.replaceChild(tripPoint.getElement(), tripEditComponent.getElement());
  };

  const tripPoint = new TripPointComponent(trip);
  const editButton = tripPoint.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, () => {
    replaceTripToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const tripEditComponent = new EditTripComponent(trip);
  const editForm = tripEditComponent.getElement();
  editForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEditToTrip();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(dayElement, tripPoint.getElement(), RenderPosition.BEFOREEND);
};

if (dates.length === 0) {
  render(document.querySelector(`.trip-days`), new NoPointsComponent().getElement(), RenderPosition.BEFOREEND);
} else {
  dates.forEach((date, index) => {
    const day = new DayComponent(date, index + 1).getElement();

    tripItems
      .filter((trip) => new Date(trip.startDate).toISOString().slice(0, 10) === date)
      .forEach((trip) => {
        renderTrip(day.querySelector(`.trip-events__list`), trip);
      });

    render(document.querySelector(`.trip-days`), day, RenderPosition.BEFOREEND);
  });
}
