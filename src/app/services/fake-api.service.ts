import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Message} from '../models/message';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  users: User [] = [
    {
      id: 'id1',
      name: 'Petya',
      logo: 'https://odesk-prod-portraits.s3.amazonaws.com/Users:petya533665:PortraitUrl?AWSAccessKeyId=AKIAIKIUKM3HBSWUGCNQ&Expires=2147483647&Signature=gpUoVk8DzeGbNgXkhFnwjXWr28U%3D&1536051611756664'
    },
    {
      id: 'id2',
      name: 'Leo',
      logo: 'https://media.gq.com/photos/5582c4b61177d66d68d57d75/master/w_800/gq-features-120108-GQfeature4v.jpg'
    },
  ];

  messages: BehaviorSubject <Message []>;
  currentUser: User;

  constructor() {
    this.currentUser = this.users[0];
    this.messages = new BehaviorSubject<Message []>([]);
  }

  getCurrentUser(): Observable<User> {
    return of(this.currentUser);
  }

  changeUser(): Observable<User> {
    if (this.currentUser.id === this.users[0].id) {
      this.currentUser = this.users[1];
    } else {
      this.currentUser = this.users[0];
    }
    return of(this.currentUser);
  }

  connectToWebSoket(): Observable<Message[]>  {
    return this.messages.asObservable();
  }

  addMessage(text): Observable<number> {
    const messages: Message [] = this.messages.getValue();
    const message: Message = {
      id:  'id' + messages.length,
      text: text,
      owner: this.currentUser,
      date:  new Date,
      edited: false
    };
    messages.unshift(message);
    this.messages.next(messages);
    return of(message.text.split(' ').length);
  }
}
