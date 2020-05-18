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
  const onEditButtonClick = () => {
    dayElement.replaceChild(EditTripComponent.getElement(), TripPointComponent.getElement());
  };

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    dayElement.replaceChild(TripPointComponent.getElement(), EditTripComponent.getElement());
  };

  const tripPoint = new TripPointComponent(trip);
  const editButton = tripPoint.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, onEditButtonClick);

  const tripEditComponent = new EditTripComponent(trip);
  const editForm = tripEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, onEditFormSubmit);

  render(dayElement, tripPoint.getElement(), RenderPosition.BEFOREEND);
};

dates.forEach((date, index) => {
  const dayElement = new DayComponent(date, index + 1).getElement();

  tripItems
    .filter((trip) => new Date(trip.startDate).toISOString().slice(0, 10) === date)
    .forEach((trip) => {
      renderTrip(dayElement.querySelector(`.trip-events__list`), trip);
    });

  render(document.querySelector(`.trip-days`), dayElement.parentElement, RenderPosition.BEFOREEND);
});
