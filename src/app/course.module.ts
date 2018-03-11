import { RouterModule } from '@angular/router';
import { CanActivateguard } from './detailview/canActivateGuard';
import { CanDeactivateDetail } from './detailview/canDeactivateDetail';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourselistComponent } from './courselist/courselist.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { Routes } from '@angular/router';

export const routeConfigChild: Routes = [
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

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfigChild)
  ],
  declarations: [ CourselistComponent, DetailviewComponent],
  providers: [
    CanDeactivateDetail,
    CanActivateguard
  ],

})
export   class CourseModule { }
