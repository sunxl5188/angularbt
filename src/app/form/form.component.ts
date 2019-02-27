import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Hero} from '../hero';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    model = new Hero('', '', '', '', '');
    private heroForm: FormGroup;

    mobileValidator(control: FormControl) {

        const mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        const result = mobileReg.test(control.value);
        return result ? null : {mobile: {info: '请输入正确的手机号'}};
    }

    equalValidator(group: FormGroup): any {

        const password = group.get('password') as FormControl;
        const pconfirm = group.get('pconfirm') as FormControl;

        const isEqule: boolean = (password.value === pconfirm.value);
        return isEqule ? null : {equal: {info: '两次密码不一致'}};
    }

    constructor(private fb: FormBuilder) {
        this.heroForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(6)]],
            mobile: ['', this.mobileValidator],
            passwordGroup: this.fb.group({
                password: ['', Validators.minLength(6)],
                pconfirm: ['']
            }, {validator: this.equalValidator})
        });
    }

    onSubmit() {
        console.log(this.model.username);
    }

    ngOnInit() {
    }

}

