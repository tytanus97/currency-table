import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
	selector: 'app-table-actions',
	templateUrl: './table-actions.component.html',
	styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent implements OnInit {

	@Output() clearFilters = new EventEmitter()

	selectedDate: Date
	constructor() { }

	ngOnInit(): void {
	}

	onDateChanged(date: Date) {
	}
}
