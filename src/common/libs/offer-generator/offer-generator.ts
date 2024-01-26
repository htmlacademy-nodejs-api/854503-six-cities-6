import { MockServerData } from '../../typings/mock-server-data-type.js';
import { getRandomItem, getRandomItems, getRandomPassword } from '../../utils/utils.js';
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
    const password: string = getRandomPassword();
    const userType: string = getRandomItem(this.mockData.userTypes);
    const postDate: string = getRandomItem(this.mockData.postDates);
    const city: string = getRandomItem(this.mockData.cities);
    const isPremium: string = getRandomItem(this.mockData.isPremium);
    const isFavorite: string = getRandomItem(this.mockData.isFavorite);
    const rating: string = getRandomItem(this.mockData.ratings);
    const housingType: string = getRandomItem(this.mockData.housingTypes);
    const roomsAmount: string = getRandomItem(this.mockData.roomAmounts);
    const guestsAmount: string = getRandomItem(this.mockData.guestAmounts);
    const rentPrice: string = getRandomItem(this.mockData.rentPrices);
    const features: string = getRandomItem<string[]>(this.mockData.features).join(';');
    const commentsAmount: string = getRandomItem(this.mockData.commentsAmounts);
    const coordinates: string = Object.values(getRandomItem(this.mockData.coordinates)).join(';');

    return [
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
      user,
      email,
      avatar,
      password,
      userType
    ].join('\t');
  }
}
