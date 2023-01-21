import { Component, OnInit } from '@angular/core'
import { ThemeSwitchService } from 'src/app/auxiliary/themeSwitch.service'

@Component({
	selector: 'app-theme-toggle',
	templateUrl: './theme-toggle.component.html',
	styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
	isLightTheme = true
	options = [{
		name: 'Ciemny',
		value: false
	},
	{
		name: 'Jasny',
		value: true
	}]

	constructor(private readonly themeSwitchService: ThemeSwitchService) { }

	ngOnInit(): void {
	}

	changeTheme(value) {
		this.themeSwitchService.switchTheme(value)
	}

}
