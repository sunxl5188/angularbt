import {Component} from '@angular/core';
import {Hero} from '../hero';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
    model = new Hero('', '');

    constructor() {
    }

    onSubmit() {
        console.log(this.model.username, this.model.name);
    }

}

