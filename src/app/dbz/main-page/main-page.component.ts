import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    public characters: Character[] = [
        {
            name: 'Robo',
            power: 6000
        },
        {
            name: 'Magus',
            power: 9000
        },
        {
            name: 'Crono',
            power: 7000
        },
    ]

    addNewCharacter(char: Character) {
        this.characters.push(char)
    }

    public newCharacter: Character = {
        name: 'Ayla',
        power: 4500
    }


}
