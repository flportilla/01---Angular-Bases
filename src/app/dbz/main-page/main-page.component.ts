import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    public newCharacter: Character = {
        name: 'Ayla',
        power: 4500
    }
    constructor() { }

}
