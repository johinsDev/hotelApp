import faker from 'faker';

import hotels from './data/hotels.json';
import amenities from './data/amenities.json';
import Hotel from '../hotel/hotel.model';
import Amenitie from '../hotel/amenitie.model';

export async function hotelSeed(count, url) {
  const newAmenities = amenities.map(amenitie => {
    return ({
      name: amenitie.name,
      image: `${url}/amenities/${amenitie.name}.svg`
    });
  });

  await Amenitie.insertMany(newAmenities);

  const newHotels = hotels.map(async (hotel) => {
    const ownerAmenities = hotel.amenities.map(async (amenitie) => {
      const a = await Amenitie.findOne({ name: amenitie });
      return a;
    });

    const promise = await Promise.all(ownerAmenities);
    return ({
      name: hotel.name,
      stars: hotel.stars,
      price: hotel.price,
      image: `${url}/hotels/${hotel.image}`,
      amenities: promise
    });
  });
  const allHotels = await Promise.all(newHotels);
  return await Hotel.insertMany(allHotels);
}
