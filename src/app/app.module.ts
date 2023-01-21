import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { InputSwitchModule } from 'primeng/inputswitch'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ThemeToggleComponent } from './currency-table/ui/theme-toggle/theme-toggle.component'
import { TableModule } from 'primeng/table'
import { SelectButtonModule } from 'primeng/selectbutton'
import { HttpClientModule } from '@angular/common/http'
import { DataTableComponent } from './currency-table/ui/data-table/data-table.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TableActionsComponent } from './currency-table/ui/table-actions/table-actions.component'
import { ButtonModule } from 'primeng/button'
import { CalendarModule } from 'primeng/calendar';
import { DateSelectorComponent } from './currency-table/ui/date-selector/date-selector.component';
import { FilterClearComponent } from './currency-table/ui/filter-clear/filter-clear.component'

@NgModule({
	declarations: [
		AppComponent,
		ThemeToggleComponent,
		DataTableComponent,
		TableActionsComponent,
  DateSelectorComponent,
  FilterClearComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ToggleButtonModule,
		InputSwitchModule,
		TableModule,
		SelectButtonModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ButtonModule,
		CalendarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
