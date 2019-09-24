import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpUtilsService} from '../../shared/HttpUtils.Service';
@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss'],
    providers: [HttpUtilsService]
})
export class CityComponent implements OnInit {

    @Input() myName = '';

    @Output() myEvent = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    handelCallBack() {
        this.myEvent.emit('我是子组件传来的值');
    }
}
