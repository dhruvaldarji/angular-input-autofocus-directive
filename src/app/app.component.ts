import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Autofocus Directive Testbed';
  focused: string;

  focusOn(val: string) {
    this.focused = val;
  }
}
