import { Component, EventEmitter, OnInit, Output } from '@angular/core'


@Component({
	selector: 'app-filter-clear',
	templateUrl: './filter-clear.component.html',
	styleUrls: ['./filter-clear.component.scss']
})
export class FilterClearComponent {

	@Output() clearFilters = new EventEmitter()

	onClearFilters() {
		this.clearFilters.emit()
	}
}
