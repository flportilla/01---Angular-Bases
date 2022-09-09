import { Component } from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `

        <h1>{{title}}</h1>
        <h3> Base is <strong>{{base}}</strong></h3>
        <button type="button" (click)="accomulate(base)">
            + {{base}}
        </button>
        <span> {{number}} </span>
        <button type="button" (click)="accomulate(-base)">
            - {{base}}
        </button>
    `
})
export class CounterComponent {

    public title: string = 'Counter app';
    public number: number = 10;
    public base: number = 5

    accomulate(value: number) {
        this.number += value;
    }

}