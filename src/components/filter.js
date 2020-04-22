const createFilterMarkup = (filterName, isChecked) => {
  return (`<div class="trip-filters__filter">
              <input id="filter-${filterName.toLowerCase()}"
              class="trip-filters__filter-input  visually-hidden"
              type="radio"
              name="trip-filter"
              value="${filterName.toLowerCase()}"
              ${isChecked ? `checked` : ``}>
              <label class="trip-filters__filter-label" for="filter-${filterName.toLowerCase()}">${filterName}</label>
            </div>`);
};

export const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
    ${filtersMarkup}
    </section>`
  );
};

export const createFiltersTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (`<h2 class="visually-hidden">Filter events</h2>
          <form class="trip-filters" action="#" method="get">
          ${filtersMarkup}
          <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`);
};
