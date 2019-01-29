import {Component, OnInit} from '@angular/core';
import {ChatService} from './services/chat.service';
import {UserService} from './services/user.service';
import {Observable} from 'rxjs';
import {Message} from './models/message';
import {User} from './models/user';

@Component({
  selector: 'rp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser$: Observable<User>;
  messages$: Observable<Message[]>;

  constructor(private chatService: ChatService, private userService: UserService) {}

  ngOnInit() {
    this.currentUser$ = this.userService.getCurrentUser();
    this.messages$ = this.chatService.getMessages();
  }

  changeUser() {
    this.currentUser$ = this.userService.changeUser();
  }

  addMessage(text) {
    this.chatService.addMessage(text).subscribe(res => {
      // API returns a count of words and you can see it in console
      console.log('Count of words ' + res);
    });
  }
}
