import { readFileSync } from 'node:fs';
import { IFileReader } from './file-reader.interface.js';
import { Offer } from '../typings/offer-type.js';
import { HousingType } from '../typings/housing-type.enum.js';
import { FeaturesType } from '../typings/features-type.enum.js';
import { UserType } from '../typings/user-type.enum.js';

export class TSVFileReader implements IFileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, 'utf-8');
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, postDate, city, preview, photos, isPremium, isFavorite, rating, housingType, roomsAmount, guestsAmount, rentPrice, features, coordinates, name, mail, avatar, password, userType]) => ({
        title,
        description,
        postDate: new Date(postDate),
        city,
        preview,
        photos: photos.split(','),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: Number.parseInt(rating, 10),
        housingType: housingType as HousingType,
        roomsAmount: Number.parseInt(roomsAmount, 10),
        guestsAmount: Number.parseInt(guestsAmount, 10),
        rentPrice: Number.parseInt(rentPrice, 10),
        features: features.split(',')
          .map((feature) => feature as FeaturesType),
        author: {
          name,
          mail,
          avatar,
          password,
          userType: userType as UserType,
        },
        coordinates: {
          latitude: parseFloat(coordinates.split(',')[0]),
          longitude: parseFloat(coordinates.split(',')[1]),
        },
      }));
  }
}
