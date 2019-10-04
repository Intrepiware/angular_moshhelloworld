import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses;

  constructor(coursesService : CoursesService) { 
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
    
  }

}
