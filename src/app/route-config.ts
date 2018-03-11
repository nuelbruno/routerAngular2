import { courceRoute } from './course-routconfig';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { Route, Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';

const indexRout: Route = {
  path: '',
  component: HomeComponent
};
const fallbackRout: Route = {
  path: '**',
  component: HomeComponent
};

export const routeConfig: Routes = [

  {
    path: 'courses',
    loadChildren: './course.module#CourseModule'
  },
  {
    path: 'lesson',
    component: LessonsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  indexRout,
  fallbackRout
];
