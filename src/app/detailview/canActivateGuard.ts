import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { CanActivate } from '@angular/router/src/interfaces';


export class CanActivateguard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

     const index = route.params['id'];
     /***############################################
      Can add webservice call to check for validation
     ###########################################****/
     console.log(index);
     if (index > 2) {
       alert('index 2 can\'t be accessed');
     }

      return true;
    }
}


