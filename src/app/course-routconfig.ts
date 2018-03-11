import { HomeComponent } from './home/home.component';


import { Component } from '@angular/core';
import { routeConfig } from './route-config';
import { Routes } from '@angular/router/src/config';

export const courceRoute: Routes = [
   {
     path: 'courses',
     loadChildren: 'app/course.module#CourseModule'
   },
   /*###############################
         Auxiliary Route   <router-outlet name="aux"></router-outlet>
      ################################*/
  {
    path: 'aux-path',
    component: HomeComponent,
    outlet: 'playlist'
  }
];

/*

{
    path: 'courses',
    children: [
      {
        path: '',
        component: CourselistComponent
      },
      {
        path: ':id',
        component: DetailviewComponent,
        canActivate: [CanActivateguard],
        canDeactivate: [CanDeactivateDetail]
      }
    ]
  }
  */
