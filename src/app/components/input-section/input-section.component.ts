import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rp-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit {

  @Output() addMessage: EventEmitter<any> = new EventEmitter<any>();
  text: string;

  constructor() {
    this.text = '';
  }

  ngOnInit() {
  }

  submit(): void {
    this.addMessage.emit(this.text);
    this.text = '';
  }

}
