import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        const loggedIn: boolean = Math.random() < 0.5;
        if (!loggedIn) {
            console.log('用户未登录');
            this.router.navigateByUrl('login');
        }
        return loggedIn;
    }
}
