import { Router,ActivatedRoute  } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  courseID: number;
  extra: string;
  dirty = false;

  constructor(private router: Router, private rout: ActivatedRoute) {

      rout.params.subscribe(params => {
        this.courseID = parseInt(params['id']);
      });

      rout.queryParams.subscribe(params => {
        this.extra = params['extra'];
      });

      //console.log('observer present', router.routerState.snapshot['observers'].length);


   }

  ngOnInit() {
  }

  changeDiry() {
    console.log(this.dirty);
    this.dirty = true;

  }

  previous() {
    return this.courseID - 1;
  }

  next() {
   return this.courseID + 1;
  }

}
