export const createTripCostTemplate = (trips) => {
  const cost = trips.reduce((acc, current) => acc + current.price, 0);
  return (`<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${cost}</span>
            </p>`);
};
