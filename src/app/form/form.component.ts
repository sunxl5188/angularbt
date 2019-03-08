import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    constructor(private fb: FormBuilder) {

    }

    myform: FormGroup;

    formErrors = {
        username: ''
    }

    validationMessage = {
        username: {
            minlength: '用户名长度最少为4个字符',
            maxlength: '用户名长度最多为10个字符',
            required: '请填写用户名',
            notdown: '用户名不能以下划线开头',
            only: '用户名只能包含数字、字母、下划线'
        }
    };

    buildForm() {
        this.myform = this.fb.group({
            username: [''],
            email: [''],
            password: [''],
            password1: [''],
            birthday: [''],
            gender: [''],
            languages: this.fb.group({
                lang1: [''],
                lang2: [''],
                lang3: [''],
                lang4: [''],
                lang5: ['']
            }),
            address: this.fb.group({
                prov: [''],
                city: [''],
                dist: [''],
                street: ['']
            }),
            aliases: this.fb.array([
                this.fb.control('')
            ])
        })
        // 每次表单数据发生变化的时候更新错误信息
        this.myform.valueChanges
            .subscribe(data => this.onValueChanged(data));

        // 初始化错误信息
        this.onValueChanged();

    }

    onValueChanged(data ?: any) {
        // 如果表单不存在则返回
        if (!this.myform) {
            return;
        }
        // 获取当前的表单
        const form = this.myform;
        // 遍历错误消息对象
        for (const field of Object.keys(this.formErrors)) {
            // 清空当前的错误消息
            this.formErrors[field] = '';
            // 获取当前表单的控件
            const control = form.get(field);

            // 当前表单存在此空间控件 && 此控件没有被修改 && 此控件验证不通过
            if (control && control.dirty && !control.valid) {
                // 获取验证不通过的控件名，为了获取更详细的不通过信息
                const messages = this.validationMessage[field];
                // 遍历当前控件的错误对象，获取到验证不通过的属性
                for (const key of Object.keys(control.errors)) {
                    // 把所有验证不通过项的说明文字拼接成错误消息
                    this.formErrors[field] += messages[key] + '\n';
                }
            }
        }
    }


    ngOnInit() {
        laydate.render({
            elem: '#time'
        });
        this.buildForm();
    }

    onSubmit() {
        console.warn(this.myform.value);
    }

    get aliases() {
        return this.myform.get('aliases') as FormArray;
    }

    addAlias() {
        this.aliases.push(this.fb.control(''));
    }

}

