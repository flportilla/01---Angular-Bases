import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {

    public name: string = 'Ironman'
    public age: number = 45

    get capitalizedName(): string{
      return this.name.toUpperCase()
    }

    changeName(): void{
      this.name = 'Spiderman';
    }
    changeAge(): void{
      this.age = 25;
    }

    getName(): string {
        return `${this.name} - ${this.age}`
    }
}
