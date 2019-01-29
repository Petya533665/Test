import {User} from './user';

export interface Message {
  id?: string;
  date?: Date;
  text: string;
  owner: User;
  edited: boolean;
}
