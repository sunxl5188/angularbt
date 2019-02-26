import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// 引入组件
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: 'form', component: FormComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
