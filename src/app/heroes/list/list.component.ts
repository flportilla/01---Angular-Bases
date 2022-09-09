import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  public removedHero: string = '';

  deleteHero() {
    this.removedHero = this.heroes.pop() || ''
  }
}
