import { Component, Input, OnInit } from '@angular/core';
import { MonthModel } from '../month.model';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css'],
})
export class DayCardComponent implements OnInit {
  @Input() dayNumber!: number;
  @Input() monthToDisplay!: MonthModel;
  dayOfWeek: string = '';
  monthName: string = '';
  date: Date = new Date();
  constructor() {}

  ngOnInit(): void {
    console.log(this.dayNumber);
    console.log(this.monthToDisplay);
    this.date.setMonth(
      parseInt(this.monthToDisplay.monthNumber),
      this.dayNumber - 1
    );
    console.log(this.monthToDisplay);
    this.getDay();
    this.getMonth();
  }

  getDay() {
    switch (this.date.getDay()) {
      case 0:
        this.dayOfWeek = 'Poniedziałek';
        break;
      case 1:
        this.dayOfWeek = 'Wtorek';
        break;
      case 2:
        this.dayOfWeek = 'Środa';
        break;
      case 3:
        this.dayOfWeek = 'Czwartek';
        break;
      case 4:
        this.dayOfWeek = 'Piątek';
        break;
      case 5:
        this.dayOfWeek = 'Sobota';
        break;
      case 6:
        this.dayOfWeek = 'Niedziela';
        break;
    }
  }
  getMonth() {
    switch (parseInt(this.monthToDisplay.monthNumber)) {
      case 0:
        this.monthName = 'Styczeń';
        break;
      case 1:
        this.monthName = 'Luty';
        break;
      case 2:
        this.monthName = 'Marzec';
        break;
      case 3:
        this.monthName = 'Kwieceń';
        break;
      case 4:
        this.monthName = 'Maj';
        break;
      case 5:
        this.monthName = 'Czerwiec';
        break;
      case 6:
        this.monthName = 'Lipiec';
        break;
      case 7:
        this.monthName = 'Sierpień';
        break;
      case 8:
        this.monthName = 'Wrzesień';
        break;
      case 9:
        this.monthName = 'Październik';
        break;
      case 10:
        this.monthName = 'Listopad';
        break;
      case 11:
        this.monthName = 'Grudzień';
        break;
    }
  }
}
