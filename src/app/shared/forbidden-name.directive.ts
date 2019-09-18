import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[appForbiddenName]'
})
export class ForbiddenNameDirective {
    constructor() {
    }
}

const regexp = {
    alpha: {rules: /^[A-Z]*$/i, messages: '只能包含字母字符'},
    alpha_dash: {rules: /^[0-9A-Z_-]*$/i, messages: '能够包含字母数字字符、破折号和下划线'},
    alpha_num: {rules: /^[0-9A-Z]*$/i, messages: '只能包含字母数字字符'},
    alpha_spaces: {rules: /^[A-Z\s]*$/i, messages: '只能包含字母字符和空格'},
    mobile: {rules: /^1[3-9]\d{9}$/, messages: '格式不正确'},
    email: {rules: /^\w+@[a-z0-9]+\.[a-z]+$/i, messages: '格式不正确'},
};

export function regexValidator(name, n = '', tipsy = ''): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const result = regexp[name]['rules'].test(control.value);
        return result ? null : {regex: {error: tipsy || n + regexp[name]['messages']}};
    };
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
}

// 验证身份证
export function idCardValidator(): ValidatorFn {
    return (control: AbstractControl): { [kay: string]: any } | null => {
        const isCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$|^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(control.value);
        return isCard ? null : {idCard: {error: '请输入有效身份证号!'}};
    };
}

