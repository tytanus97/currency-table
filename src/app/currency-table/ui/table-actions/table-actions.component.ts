import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
	selector: 'app-table-actions',
	templateUrl: './table-actions.component.html',
	styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent implements OnInit {

	@Output() clearFilters = new EventEmitter()
	@Output() dateChanges = new EventEmitter<Date>()

	selectedDate: Date
	constructor() { }

	ngOnInit(): void {
	}

	onDateChanged(date: Date) {
	}
}
