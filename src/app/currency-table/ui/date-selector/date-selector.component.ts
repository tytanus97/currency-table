import { Subject, Subscription } from 'rxjs'
import { DateValidatorService, VALID_FORMAT_DATE } from './../../../auxiliary/date-validator.service'
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { debounceTime } from 'rxjs/operators'

@Component({
	selector: 'app-date-selector',
	templateUrl: './date-selector.component.html',
	styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit, OnDestroy {

	selectedDate: Date
	isValid = true
	maxDate: Date
	private _dateChangedEvent$ = new Subject<Date>()
	private __dateChangedEventToken: Subscription

	@Output() dateChanges = new EventEmitter()



	constructor(private readonly dateValidatorService: DateValidatorService) { }

	ngOnDestroy(): void {
		if (this.__dateChangedEventToken) {
			this.__dateChangedEventToken.unsubscribe()
		}
	}

	ngOnInit(): void {
		this.maxDate = new Date()
		this.__dateChangedEventToken = this._dateChangedEvent$.pipe(debounceTime(500)).subscribe(date => {
			this.dateChanges.emit(date)
		})
	}

	onDateChanged(date: Date) {
		this.isValid = this.dateValidatorService.validateDate(this.selectedDate, VALID_FORMAT_DATE)
		if (this.isValid) {
			this._dateChangedEvent$.next(this.selectedDate)
		}
	}
}
