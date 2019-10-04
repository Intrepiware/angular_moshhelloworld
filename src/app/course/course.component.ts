import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() name;
  
  constructor() { }

  ngOnInit() {
  }

}
