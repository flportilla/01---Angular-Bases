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

    public newCharacter: Character = {
        name: '',
        power: 0
    }

    add() {
        if ((this.newCharacter.name).trim().length === 0) return;
        this.characters.push(this.newCharacter)
        this.newCharacter = {
            name: '',
            power: 0
        }

    }

}
