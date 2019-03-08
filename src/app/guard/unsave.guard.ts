import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {UserComponent} from '../user/user.component';


@Injectable({
    providedIn: 'root'
})

export class UnsaveGuard implements CanDeactivate<UserComponent> {
    canDeactivate(
        component: UserComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // return false;
        return window.confirm('你还没有保存，确定要离开吗？');
    }
}
