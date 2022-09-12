import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',

})
export class AddComponent {

	@Input() newCharacter: Character = {
		name: '',
		power: 0
	}

	constructor(private DbzService: DbzService) { }

	// @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

	add() {
		if (this.newCharacter.name.trim().length === 0) return

		this.DbzService.addCharacters(this.newCharacter)
		// this.onNewCharacter.emit(this.newCharacter)
		this.newCharacter = {
			name: '',
			power: 0
		}
	}

}
