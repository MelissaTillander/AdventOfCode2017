import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showNav = true;
  appHeader ='Advent of Code 2017'

  printStuff(){console.log("Stuff: " + this.inputText)}
}
