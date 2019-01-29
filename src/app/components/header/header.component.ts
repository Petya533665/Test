import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'rp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;
  @Output() changeUser: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
