const optionTypes = [
  {
    type: `Add luggage`,
    id: `luggage`,
  },
  {
    type: `Switch to comfort class`,
    id: `comfort`,
  },
  {
    type: `Add meal`,
    id: `meal`,
  },
  {
    type: `Choose seats`,
    id: `seats`,
  },
  {
    type: `Travel by train`,
    id: `train`,
  },
  {
    type: `Order Uber`,
    id: `uber`,
  },
];
const tripTypes = [
  {
    type: `Check-in`,
    action: `in`
  },
  {
    type: `Sightseeing`,
    action: `in`
  },
  {
    type: `Restaurant`,
    action: `in`
  },
  {
    type: `Taxi`,
    action: `to`
  },
  {
    type: `Bus`,
    action: `to`
  },
  {
    type: `Train`,
    action: `to`
  },
  {
    type: `Transport`,
    action: `to`
  },
  {
    type: `Ship`,
    action: `to`
  },
  {
    type: `Flight`,
    action: `to`
  },
  {
    type: `Drive`,
    action: `to`
  },
];
const cityList = [`Kyiv`, `Moscow`, `Warsaw`, `Amsterdam`, `Krakow`, `Berlin`];
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateOption = (option) => {
  const {type, id, checked} = option;
  return {
    id,
    type,
    price: Math.floor(Math.random() * 100),
    checked
  };
};

const generateOptionsList = () => {
  const options = [];
  const optionsAmount = Math.min(Math.ceil(Math.random() * 5), 5);
  for (let i = 0; i < optionsAmount; i++) {
    const option = generateOption(optionTypes[Math.floor(Math.random() * optionTypes.length)]);
    options.push(option);
  }
  return options;
};

const generateTripDescription = () => {
  const tripDescription = [];
  const descriptionArray = description.split(`.`);
  const sentencesAmount = Math.min(Math.ceil(Math.random() * 5), 5);
  for (let i = 0; i < sentencesAmount; i++) {
    tripDescription.push(descriptionArray[Math.floor(Math.random() * descriptionArray.length)]);
  }
  return tripDescription.join(`.`);
};

const generateTripPhotos = () => {
  const tripPhotos = [];
  const photosAmount = Math.min(Math.ceil(Math.random() * 5), 5);
  for (let i = 0; i < photosAmount; i++) {
    tripPhotos.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return tripPhotos;
};

const generateEndDate = () => {
  const startDate = new Date().getTime() + 1.5 * 60 * 60 * 1000;
  const endDate = new Date(startDate);
  return endDate;
};

const generateTrip = () => {
  const trip = tripTypes[Math.floor(Math.random() * tripTypes.length)];
  trip.city = cityList[Math.floor(Math.random() * cityList.length)];
  trip.offers = generateOptionsList();
  trip.description = generateTripDescription();
  trip.photos = generateTripPhotos();
  trip.price = Math.max(Math.ceil(Math.random() * 500), 100);
  trip.date = new Date().toISOString().slice(0, 10);
  trip.startDateMs = new Date().getTime();
  trip.startDate = new Date();
  trip.endDateMs = generateEndDate().getTime();
  trip.endDate = generateEndDate();
  return trip;
};

const generateTrips = (tripsAmount) => {
  const tripItems = [];
  for (let i = 0; i < tripsAmount; i++) {
    tripItems.push(generateTrip());
  }
  return tripItems;
};

export {generateTrips};
