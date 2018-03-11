import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  constructor(private router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit() {}

  openCourseURL(courseId) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }
  openCourseArry(courseId) {
    this.router.navigate(['courses', courseId], {
      queryParams: {
        extra : 'test query data'
      }
    }
    );
  }
  openCourseRelative(courseId) {
    this.router.navigate([courseId], { relativeTo: this.actRoute });
  }
}
