import { Injectable } from '@angular/core';
import {FakeApiService} from './fake-api.service';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: FakeApiService) { }

  getCurrentUser(): Observable<User> {
    return this.api.getCurrentUser();
  }

  changeUser(): Observable<User> {
    return this.api.changeUser();
  }
}
