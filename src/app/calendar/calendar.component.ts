import { Component, OnInit } from '@angular/core';
import { _MatTabBodyBase } from '@angular/material/tabs';
import { MonthModel } from './month.model';
enum Months {
  A = 'Styczeń',
  B = 'Luty',
  C = 'Marzec',
  D = 'Kwiecień',
  E = 'Maj',
  F = 'Czerwiec',
  G = 'Lipiec',
  H = 'Sierpień',
  I = 'Wrzesień',
  J = 'Pazdziernik',
  K = 'Listopad',
  L = 'Grudzień',
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  display = false;
  months = Months;
  month: MonthModel = {
    monthNumber: '0',
    days: 0,
  };
  chosenMonth!: string;
  numbers: Number[] = [];
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.numbers = [];
    this.display = true;
    const tmp = {
      monthNumber: this.chosenMonth,
      days: this.numberOfDays(this.date, this.chosenMonth),
    };
    this.month = tmp;
    for (let i = 1; i <= this.month.days; i++) {
      this.numbers.push(i);
    }
  }

  numberOfDays(someDate: Date, month: string): number {
    return new Date(someDate.getFullYear(), parseInt(month) + 1, 0).getDate();
  }
  trackByFn(index: number) {
    return index;
  }
}
