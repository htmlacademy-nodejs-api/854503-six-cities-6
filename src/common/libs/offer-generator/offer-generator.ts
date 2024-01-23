import { MockServerData } from '../../typings/mock-server-data-type.js';
import { getRandomItem, getRandomItems } from '../../utils/utils.js';
import { IOfferGenerator } from './offer-generator.interface.js';

export class OfferGenerator implements IOfferGenerator {
  constructor (private readonly mockData: MockServerData) {}

  public generate(): string {
    const title: string = getRandomItem(this.mockData.titles);
    const description: string = getRandomItem(this.mockData.descriptions);
    const preview: string = getRandomItems(this.mockData.previews).join(';');
    const photos: string = getRandomItems(this.mockData.photos).join(';');
    const user: string = getRandomItem(this.mockData.users);
    const email: string = getRandomItem(this.mockData.emails);
    const avatar: string = getRandomItem(this.mockData.avatars);
    const postDates: string = getRandomItem(this.mockData.postDates);
    const city: string = getRandomItem(this.mockData.isFavorite);
    const isPremium: string = getRandomItem(this.mockData.isPremium);
    const isFavorit: string = getRandomItem(this.mockData.isFavorite);
    const rating: string = getRandomItem(this.mockData.ratings);
    const housingType: string = getRandomItem(this.mockData.housingTypes);
    const roomAmount: string = getRandomItem(this.mockData.roomAmounts);
    const guestAmount: string = getRandomItem(this.mockData.guestAmounts);
    const rentPrice: string = getRandomItem(this.mockData.rentPrices);
    const features: string = getRandomItem(this.mockData.features);
    const commentsAmount: string = getRandomItem(this.mockData.commentsAmounts);
    const coordinates: string = Object.values(getRandomItem(this.mockData.coordinates)).join(';');

    return [
      title, description, preview, photos,
      user, email, avatar, postDates,
      city, isPremium, isFavorit, rating,
      housingType, roomAmount, guestAmount, rentPrice,
      features, commentsAmount, coordinates
    ].join('\t');
  }
}
