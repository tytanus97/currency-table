export interface Currency {
	currency: string
	code: string
	mid: number
}

export interface CurrencyTableData {
	table: string,
	no: string
	effectiveDate: Date
	rates: Currency[]
}
