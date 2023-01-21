import { Component, OnInit, ViewChild } from '@angular/core'
import { CurrenciesHttpClientService } from '../../communication/currencies-http-client.service'
import { Currency, CurrencyTableData } from '../../domain/models'
import { Table } from 'primeng/table'

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

	currencies: Currency[]
	errorMessage = ''
	constructor(private readonly currenciesHttpClientService: CurrenciesHttpClientService) { }

	ngOnInit(): void {
		this.fetchCurrencies()

	}

	onClearFilters(table: Table) {
		if (table) {
			table.reset()
		}
	}

	onDateChanged(date: Date) {
		this.fetchCurrencies(date)
	}

	private async fetchCurrencies(date?: Date): Promise<void> {
		try {
			const dataTable = date
				? await this.currenciesHttpClientService.getCurrencyDataByDate(date)
				: await this.currenciesHttpClientService.getCurrencyData()
			if (!dataTable || !dataTable.rates.length) {
				this.errorMessage = 'Brak danych'
				return
			}
			this.currencies = dataTable.rates
			this.errorMessage = ''
		} catch (e) {
			this.errorMessage = 'Nie udalo sie pobrac danych'
		}

	}

	refreshData() {
		this.fetchCurrencies()
	}
}
