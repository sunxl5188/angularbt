import {Component, OnInit} from '@angular/core';
import {routerAnimate} from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routerAnimate]
})
export class AppComponent implements OnInit {
    title = 'angulardemo';

    ngOnInit() {
        console.log(routerAnimate);
    }

}
