import { Component, OnInit } from '@angular/core';

interface Character {
    name: string,
    power: number
}

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    public newCharacter: Character = {
        name: 'Magus',
        power: 9000
    }

    changeName(event: any) {
        console.log(event.target.value)
    }

    add() {
        console.log(this.newCharacter)
    }

}
