import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import {emailValidator} from '../shared/forbidden-name.directive';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    constructor() {
    }

    formData = {
        userName: '',
        password: ''
    };

    myForm: FormGroup;

    ngOnInit() {
        this.myForm = new FormGroup({
            userName: new FormControl(this.formData.userName, [
                    Validators.required,
                    emailValidator()
                ]
            )
        });
    }

    get userName() {
        return this.myForm.get('userName');
    }
}

