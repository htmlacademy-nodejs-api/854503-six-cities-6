import { Author } from './author-type.js';
import { Coordinates } from './coordinates-type.js';
import { Features } from './features-type.enum.js';
import { HousingType } from './housing-type.enum.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: string;
  preview: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  housingType: HousingType;
  roomsAmount: number;
  guestsAmount: number;
  rentPrice: number;
  features: Features[];
  author: Author;
  commentsAmount: number;
  coordinates: Coordinates;
}
