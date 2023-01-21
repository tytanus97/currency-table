import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {

  selectedDate: Date
  constructor() { }

  ngOnInit(): void {
  }

  onDateChanged(date: Date) {
	console.log('chabged', date)

  }

  validateDate(date) {
	console.log('on blue', date)

  }
}
