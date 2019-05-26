import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SidebarService {

	public sidebarVisible: boolean = true;

	constructor() { }

	toggle() {
		this.sidebarVisible = !this.sidebarVisible;
	}

	getStatus() {
		return this.sidebarVisible;
	}
}
