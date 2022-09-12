import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',

})
export class AddComponent {

	@Input() newCharacter: Character = { name: '', power: 0 }
	@Input() add: Function = () => { }
	@Input() characters: Character[] = []

}
