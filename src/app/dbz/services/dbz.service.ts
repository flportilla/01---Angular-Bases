
import { Injectable } from '@angular/core'
import { Character } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _characters: Character[] = [
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

    get charcters(): Character[] {
        return [...this._characters]
    }

    // constructor() { }

    addCharacters(character: Character) {
        this._characters.push(character)
    }

}