import { Author } from '../typings/author-type.js';
import { City } from '../typings/city-type.enum.js';
import { Coordinates } from '../typings/coordinates-type.js';
import { featuresMaping } from '../typings/features-type.enum.js';
import { HousingType } from '../typings/housing-type.enum.js';
import { Offer } from '../typings/offer-type.js';
import { UserType } from '../typings/user-type.enum.js';


export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    postDate,
    city,
    preview,
    photos,
    isPremium,
    isFavorite,
    rating,
    housingType,
    roomsAmount,
    guestsAmount,
    rentPrice,
    features,
    commentsAmount,
    coordinates,
    name,
    email,
    avatar,
    password,
    userType
  ] = offerData.replace('\n', '').split('\t');

  const author: Author = {
    name,
    email,
    avatar,
    password,
    userType: UserType[userType.trim() as keyof typeof UserType],
  };

  const processedFeatures = features.split(';')
    .map((feature) => featuresMaping[feature.trim()]);

  const processedCoordinates: Coordinates = {
    latitude: parseFloat(coordinates.split(';')[0]),
    longitude: parseFloat(coordinates.split(';')[1]),
  };

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: City[city.trim() as keyof typeof City],
    preview,
    photos: photos.split(';'),
    isPremium: isPremium.toLowerCase() === 'true',
    isFavorite: isFavorite.toLowerCase() === 'true',
    rating: Number.parseInt(rating, 10),
    housingType: HousingType[housingType.trim() as keyof typeof HousingType],
    roomsAmount: Number.parseInt(roomsAmount, 10),
    guestsAmount: Number.parseInt(guestsAmount, 10),
    rentPrice: Number.parseInt(rentPrice, 10),
    features: processedFeatures,
    author,
    commentsAmount: Number.parseInt(commentsAmount, 10),
    coordinates: processedCoordinates,
  };
}
