const createNavigationFieldMarkup = (navigationType, active) => {
  return (
    `<a class="trip-tabs__btn  ${active ? `trip-tabs__btn--active` : ``}" href="#">${navigationType}</a>`
  );
};

export const createNavigationTemplate = (navigationFields) => {
  const navigationFieldsMarkup = navigationFields.map((it, i) => createNavigationFieldMarkup(it, i === 0)).join(`\n`);
  return (`<h2 class="visually-hidden">Switch trip view</h2>
          <nav class="trip-controls__trip-tabs  trip-tabs">
            ${navigationFieldsMarkup}
          </nav>`);
};
