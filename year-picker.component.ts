import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { ClickOutsideDirective } from './directives/click-outside.directive';

@Component({
  selector: 'year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss']
})
export class YearPickerComponent implements OnInit {
  currentDecade: number[] = [];
  currentYear = Math.floor(moment().year() / 10) * 10 + 9;
  decadeIndication: string;

  @Input()
  isHidden: boolean;

  @Output()
  clickedOutside = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    for (let i = this.currentYear - 10; i <= this.currentYear + 1; i++) {
      this.currentDecade.push(i);
    }
    this.decadeIndication = `${this.currentDecade[1]}-${this.currentYear}`;
  }

  changeDecade(years: number) {
    this.currentDecade = this.currentDecade.map(function(year) {
      return year + years;
    });
    this.decadeIndication = `${this.currentDecade[1]}-${this.currentDecade[10]}`;
  }

  toggleVisibility() {
    this.clickedOutside.emit();
  }

}
