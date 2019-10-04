import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {

  @Input() title;
  contentVisible = false;

  constructor() { }

  handleClickTitle($event) {
    this.contentVisible = !this.contentVisible;
  }
}
