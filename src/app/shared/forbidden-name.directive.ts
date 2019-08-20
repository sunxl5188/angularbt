import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[appForbiddenName]'
})
export class ForbiddenNameDirective {
    constructor() {
    }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
}

// 验证手机号
export function mobileValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const isMobile = /^1[3456789]\d{9}$/.test(control.value);
        return isMobile ? null : {mobile: {error: '请输入正确的手机号!'}};
    };
}

// 验证身份证
export function idCardValidator(): ValidatorFn {
    return (control: AbstractControl): { [kay: string]: any } | null => {
        const isCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$|^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(control.value);
        return isCard ? null : {idCard: {error: '请输入有效身份证号!'}};
    };
}

// 验证邮箱地址
export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const isEmail = /^\w+@[a-z0-9]+\.[a-z]+$/.test(control.value);
        return isEmail ? null : {email: {error: '请输入正确的邮箱地址!'}};
    };
}

// 正则表达式验证
export function validateValidator(nameType): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        let isTrue;
        let reg;
        switch (nameType) {
            case 'alpha':
                reg = /^[A-Z]*$/i;
                break;
        }
        isTrue = reg.test(control.value);
        return isTrue ? null : {};
    };
}

// 验证字符只能包含字母
// 验证字符只能包含字母,数字，短划线或下划线
// 验证字段可能包含字母字符或数字
// 验证字段可能包含字母字符或空格
