import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {UserComponent} from '../user/user.component';


@Injectable({
    providedIn: 'root'
})
export class UserResolve implements Resolve<UserComponent> {
    constructor(private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const productId: number = route.params['id'];
        if (productId === 2) { // 正确id
            return new UserComponent();
        } else { // id不是1导航回首页
            this.router.navigate(['/']);
            return undefined;
        }
    }
}
