import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  courses = [];//[1, 2];

  onFavoriteChanged({ newValue }) {
    console.log(`Favorite changed: ${newValue}`);
  }
}
