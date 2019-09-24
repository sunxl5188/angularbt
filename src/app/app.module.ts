import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {ErrorComponent} from './error/error.component';
import {FormComponent} from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
import { CityComponent } from './common/city/city.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        ErrorComponent,
        FormComponent,
        DetailComponent,
        UserComponent,
        LoginComponent,
        ForbiddenNameDirective,
        CityComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
