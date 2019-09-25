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

    provList: string;
    cityList: string;
    areaList: string;
    error: any;
    province = '';
    city = '';
    area = '';

    constructor(
        private $http: HttpUtilsService
    ) {
    }

    ngOnInit() {
        this.$http.getJSON('assets/json/city.json')
            .subscribe(
                (data) => {
                    this.provList = data['cityList'];
                },
                (error) => this.error = error
            );
    }

    /**
     * 查找子级对象
     */
    findChild(pid, type) {
        if (type === 1) {
            for (const item of this.provList) {
                if (item['area_id'] === pid) {
                    this.cityList = item['child'];
                }
            }
        }
        if (type === 2) {
            for (const item of this.cityList) {
                if (item['area_id'] === pid) {
                    this.areaList = item['child'];
                }
            }
        }
    }

    handelCallBack() {
        this.myEvent.emit('我是子组件传来的值');
    }
}
