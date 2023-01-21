import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { InputSwitchModule } from 'primeng/inputswitch'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ToggleButtonModule,
		InputSwitchModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
