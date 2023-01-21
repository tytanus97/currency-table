import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CurrencyTableData } from '../domain/models'

@Injectable({
	providedIn: 'root'
})
export class CurrenciesHttpClientService {

	private _BASE_URL = 'https://api.nbp.pl/api'

	constructor(private readonly httpClient: HttpClient) {
	}

	getCurrencyData(): Observable<CurrencyTableData> {
		return this.httpClient.get<CurrencyTableData>(`${this._BASE_URL}/exchangerates/tables/A/?format=json`, { observe: 'body' })
			.pipe(map((body) => body[0]))
	}

	getCurrencyDataByDate(date: Date): Observable<CurrencyTableData> {
		return this.httpClient.get<CurrencyTableData>(`${this._BASE_URL}/exchangerates/tables/A/${date}/?format=json`, { observe: 'body' })
			.pipe(map((body) => body[0]))
	}
}
