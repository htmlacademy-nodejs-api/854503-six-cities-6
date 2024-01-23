import { Author } from './author-type.js';

export type Comment = {
  text: string;
  postDate: Date;
  rating: number;
  author: Author;
}
