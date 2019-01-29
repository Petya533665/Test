import {Injectable} from '@angular/core';
import {FakeApiService} from './fake-api.service';
import {Observable} from 'rxjs';
import {Message} from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private api: FakeApiService) {
  }

  addMessage(text): Observable<number> {
    return this.api.addMessage(text);
  }

  getMessages(): Observable<Message[]> {
    // Use simple RxJS to create open connection with API
    return this.api.connectToWebSoket();
  }
}
