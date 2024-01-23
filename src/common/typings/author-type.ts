import { UserType } from './user-type.enum.js';

export type Author = {
  name: string;
  mail: string;
  avatar: string;
  password: string;
  userType: UserType;
}