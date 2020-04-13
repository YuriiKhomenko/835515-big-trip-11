const optionTypes = [`Book tickets`, `Add luggage`, `Switch to comfort`, `Add breakfast`, `Add dinner`, `Order Uber`];
const tripTypes = [
  {
    type: `Check-in`,
    pretext: `in`
  },
  {
    type: `Sightseeing`,
    pretext: `in`
  },
  {
    type: `Restaurant`,
    pretext: `in`
  },
  {
    type: `Taxi`,
    pretext: `to`
  },
  {
    type: `Bus`,
    pretext: `to`
  },
  {
    type: `Train`,
    pretext: `to`
  },
  {
    type: `Transport`,
    pretext: `to`
  },
  {
    type: `Ship`,
    pretext: `to`
  },
  {
    type: `Flight`,
    pretext: `to`
  },
  {
    type: `Drive`,
    pretext: `to`
  },
];
const cityList = [`Kyiv`, `Moscow`, `Warsaw`, `Amsterdam`, `Krakow`, `Berlin`];
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateOption = (type) => {
  return {
    type,
    price: Math.floor(Math.random() * 100)
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

const generateDates = () => {
  const startDate = new Date();
  const differenceMs = Math.max(Math.round(Math.random() * 3), 1) * 60 * 60 * 1000;
  const newTimeMs = startDate.getTime() + differenceMs;
  const endDate = new Date(newTimeMs);
  return {
    startTime: startDate.toISOString().slice(11, 16),
    startTimeDate: startDate.toISOString().slice(0, 16),
    endTime: endDate.toISOString().slice(11, 16),
    endTimeDate: endDate.toISOString().slice(0, 16),
    difference: differenceMs / (60 * 60 * 1000),
  };
};

const generateTrip = () => {
  const trip = tripTypes[Math.floor(Math.random() * tripTypes.length)];
  trip.city = cityList[Math.floor(Math.random() * cityList.length)];
  trip.offers = generateOptionsList();
  trip.description = generateTripDescription();
  trip.photos = generateTripPhotos();
  trip.price = Math.max(Math.ceil(Math.random() * 500), 100);
  trip.dates = generateDates();
  return trip;
};

export {generateTrip};
