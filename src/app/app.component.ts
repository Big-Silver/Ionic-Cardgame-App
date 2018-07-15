import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HomeNavigationPage } from '../pages/home-navigation/home-navigation';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage = HomeNavigationPage;
	pages: Array<{ title: string, component: any }>;

	constructor(
		public platform: Platform,
		public menu: MenuController,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		private keyboard : Keyboard,
		private orientation : ScreenOrientation
	) {
		this.initializeApp();
		this.pages = [
			{ title: 'Home', component: HomePage }
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.hide();
			this.statusBar.overlaysWebView(false);
			this.splashScreen.hide();
		});
	}
	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}
}