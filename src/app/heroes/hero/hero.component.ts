import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {

    public name: string = 'Ironman'
    public age: number = 45

    get capitalizedName(){
      return this.name.toUpperCase()
    }

    getName(): string {
        return `${this.name} - ${this.age}`
    }
}
