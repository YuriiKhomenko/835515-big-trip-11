const ADDITIONAL_OFFERS_AMOUNT = 5;
const PHOTOS_AMOUNT = 5;
const TRIP_ITEMS_NUMBER = 15;

const additionalOffers = [
  {
    type: `Add luggage`,
    id: `luggage`,
    price: 15,
    isChecked: true
  },
  {
    type: `Switch to comfort class`,
    id: `comfort`,
    price: 50,
    isChecked: false
  },
  {
    type: `Add meal`,
    id: `meal`,
    price: 25,
    isChecked: true
  },
  {
    type: `Choose seats`,
    id: `seats`,
    price: 20,
    isChecked: true
  },
  {
    type: `Travel by train`,
    id: `train`,
    price: 10,
    isChecked: false
  },
  {
    type: `Order Uber`,
    id: `uber`,
    price: 5,
    isChecked: true
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
const cityList = [`Geneve`, `Amsterdam`, `Chamonix`, `Kyiv`, `Wroclaw`];
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

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
  const photosAmount = Math.min(Math.ceil(Math.random() * PHOTOS_AMOUNT), PHOTOS_AMOUNT);
  for (let i = 0; i < photosAmount; i++) {
    tripPhotos.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return tripPhotos;
};

const generateOffer = (offer) => {
  const {type, id, price, isChecked} = offer;
  return {
    id,
    type,
    price,
    isChecked
  };
};

const generateOffers = () => {
  const offers = [];
  const offersAmount = Math.min(Math.ceil(Math.random() * ADDITIONAL_OFFERS_AMOUNT), ADDITIONAL_OFFERS_AMOUNT);
  for (let i = 0; i < offersAmount; i++) {
    const option = generateOffer(additionalOffers[Math.floor(Math.random() * additionalOffers.length)]);
    offers.push(option);
  }
  return offers;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};


const generateRandomDate = () => {
  return (
    Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * getRandomNumber(0, 60) * 60 * 1000
  );
};

const generateTrip = () => {
  const startDate = generateRandomDate();
  const endDate = generateRandomDate();
  const trip = tripTypes[Math.floor(Math.random() * tripTypes.length)];
  trip.city = cityList[Math.floor(Math.random() * cityList.length)];
  trip.description = generateTripDescription();
  trip.photos = generateTripPhotos();
  trip.price = Math.max(Math.ceil(Math.random() * 300), 100);
  trip.startDate = Math.min(startDate, endDate);
  trip.endDate = Math.max(startDate, endDate);
  trip.offers = generateOffers();
  trip.favourite = false;
  return trip;
};

const generateTrips = (amount) => {
  return (Array(amount)
    .fill(``)
    .map((_) => generateTrip())
    .sort((currentTrip, nextTrip) => currentTrip.startDate - nextTrip.startDate)
  );
};

const tripItems = generateTrips(TRIP_ITEMS_NUMBER);

const dates = [...new Set(tripItems.map((it) => new Date(it.startDate).toISOString().slice(0, 10)))];

export {tripItems, dates};
