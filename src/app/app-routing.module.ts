import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginGuard} from './guard/login.guard';
import {UnsaveGuard} from './guard/unsave.guard';
import {UserResolve} from './guard/user.guard';


// 引入组件
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {FormComponent} from './form/form.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {CityComponent} from './common/city/city.component';
import {ErrorComponent} from './error/error.component';


const routes: Routes = [
    {path: 'list', component: ListComponent},
    {path: 'detail', component: DetailComponent},
    {path: 'form', component: FormComponent},
    {
        path: 'user', component: UserComponent, canActivate: [LoginGuard], canDeactivate: [UnsaveGuard], resolve: {
            user: UserResolve
        }
    },
    {path: 'login', component: LoginComponent},
    {path: 'city', component: CityComponent},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // useHash: true
    })],
    exports: [RouterModule],
    providers: [LoginGuard, UnsaveGuard, UserResolve]
})
export class AppRoutingModule {
}

// Angular路由——路由守卫 https://www.cnblogs.com/starof/p/9012193.html
