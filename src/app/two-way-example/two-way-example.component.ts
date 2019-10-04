import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-example',
  templateUrl: './two-way-example.component.html',
  styleUrls: ['./two-way-example.component.scss']
})
export class TwoWayExampleComponent implements OnInit {

  email = "me@example.com";

  constructor() { }

  ngOnInit() {
  }


}
