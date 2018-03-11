import { Observable } from 'rxjs/Observable';
import { DetailviewComponent } from './detailview.component';
import { CanDeactivate } from "@angular/router";
import { ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router/src/router_state';

export class CanDeactivateDetail implements CanDeactivate<DetailviewComponent> {
  canDeactivate(component: DetailviewComponent,
     currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log(component.dirty);
       if (!component.dirty) {
         return true;
       }

       return confirm('Are you sure you want to navigate away?');
  }

}
