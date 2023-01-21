import { Component, OnInit } from '@angular/core'
import { CurrenciesHttpClientService } from '../../communication/currencies-http-client.service'
import { Currency, CurrencyTableData } from '../../domain/models'

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

	currencies: Currency[]
	constructor(private readonly currenciesHttpClientService: CurrenciesHttpClientService) { }

	ngOnInit(): void {

		this.currenciesHttpClientService.getCurrencyData().subscribe((data: CurrencyTableData) => {
			console.log('data', data)
			console.log('data', data.rates)

			this.currencies = data.rates
		})
	}

}
