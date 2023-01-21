import { Injectable } from '@angular/core'
import * as moment from 'moment'

export const VALID_FORMAT_DATE = 'YYYY-MM-DD'

@Injectable({
	providedIn: 'root'
})
export class DateValidatorService {


	validateDate(date: Date, format: string = VALID_FORMAT_DATE): boolean {
		return moment(date, format).isValid()
	}
}
