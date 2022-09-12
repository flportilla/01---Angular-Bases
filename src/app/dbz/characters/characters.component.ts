import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  // @Input('data') public characters: Character[] = []

  get characters() {
    return this.DbzService.charcters;
  }

  constructor(private DbzService: DbzService) { }

}
