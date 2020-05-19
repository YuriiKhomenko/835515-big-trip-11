import {createNodeElement} from "./util.js";

const createNoPointsTemplate = () => {
  return (
    `<section class="trip-events">
          <h2 class="visually-hidden">Trip events</h2>
          <p class="trip-events__msg">Click New Event to create your first point</p>
        </section>`
  );
};


export default class NoPoints {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoPointsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createNodeElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
