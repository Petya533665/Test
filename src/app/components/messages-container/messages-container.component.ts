import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {User} from '../../models/user';

@Component({
  selector: 'rp-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent implements OnInit {

  @Input() messages:  Message[];
  @Input() user:  User;

  constructor() { }

  ngOnInit() {
  }

}
