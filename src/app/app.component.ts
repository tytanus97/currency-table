import { ThemeSwitchService } from './auxiliary/themeSwitch.service'
import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = ''
	isLightTheme = false

	constructor(private readonly themeSwitchService: ThemeSwitchService) { }

	changeTheme(value) {
		this.themeSwitchService.switchTheme(value)
	}
}
