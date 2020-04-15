const createSortingMarkup = (type) => {
  if (type === `Day` || type === `Offers`) {
    return (
      `<span class="trip-sort__item  trip-sort__item--${type.toLowerCase()}">${type}</span>`
    );
  } else if (type === `Offers`) {
    return (
      `<div class="trip-sort__item  trip-sort__item--${type.toLowerCase()}">
          <input id="sort-${type.toLowerCase()}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type.toLowerCase()}" checked>
          <label class="trip-sort__btn" for="sort-${type.toLowerCase()}">${type}</label>
        </div>`
    );
  } else {
    return (
      `<div class="trip-sort__item  trip-sort__item--${type.toLowerCase()}">
          <input id="sort-${type.toLowerCase()}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type.toLowerCase()}">
          <label class="trip-sort__btn" for="sort-${type.toLowerCase()}">
            ${type}
            <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>
          </label>
        </div>`
    );
  }
};

export const createSortingTemplate = (sortingTypes) => {
  const sortingMarkup = sortingTypes.map((it) => createSortingMarkup(it)).join(`\n`);
  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
          ${sortingMarkup}
          </form>`);
};
