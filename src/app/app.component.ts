import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // template: `` 
})
export class AppComponent {
  public title: string = 'Counter app';
}

const a = () => {
  return 'hello'
}