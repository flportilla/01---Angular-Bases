import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // template: `` 
})
export class AppComponent {
  public title: string = 'Counter app';
  public number: number = 10;
  public base: number = 5


  accomulate(value: number) {
    this.number += value;
  }

}