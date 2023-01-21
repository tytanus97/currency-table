import { VALID_FORMAT_DATE } from './../../auxiliary/date-validator.service'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CurrencyTableData } from '../domain/models'
import * as moment from 'moment'

@Injectable({
	providedIn: 'root'
})
export class CurrenciesHttpClientService {

	private _BASE_URL = 'https://api.nbp.pl/api'

	constructor(private readonly httpClient: HttpClient) {
	}

	getCurrencyData(): Promise<CurrencyTableData> {
		return this.httpClient.get<CurrencyTableData>(`${this._BASE_URL}/exchangerates/tables/A/?format=json`, { observe: 'body' })
			.pipe(map((body) => body[0])).toPromise()
	}

	getCurrencyDataByDate(date: Date): Promise<CurrencyTableData> {
		const formatted = moment(date).format(VALID_FORMAT_DATE)
		return this.httpClient.get<CurrencyTableData>(`${this._BASE_URL}/exchangerates/tables/A/${formatted}/?format=json`, { observe: 'body' })
			.pipe(map((body) => body[0])).toPromise()
	}
}
