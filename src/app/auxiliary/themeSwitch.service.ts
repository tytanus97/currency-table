import { Injectable, Renderer2, RendererFactory2 } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ThemeSwitchService {
	private readonly _LIGHT_THEME = 'light'
	private readonly _DARK_THEME = 'dark'
	private _renderer: Renderer2

	constructor(rendererFactory: RendererFactory2) {
		this._renderer = rendererFactory.createRenderer(null, null)
	}

	switchTheme(isLight: boolean) {
		const link = document.getElementById('app-theme')
		this._renderer.setAttribute(link, 'href', `assets/themes/${isLight ? this._LIGHT_THEME : this._DARK_THEME}.css`)
	}
}
