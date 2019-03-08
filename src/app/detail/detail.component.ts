import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../service/http.service';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    http: HttpService;
    id = null;

    constructor(
        private router: ActivatedRoute,
        private TitleServe: Title
    ) {
        TitleServe.setTitle('信息详细页');
    }

    ngOnInit() {
        this.id = this.router.snapshot.queryParams['id'];
        // this.http.getAllData() https://blog.csdn.net/weixin_41623959/article/details/82849470
    }

}
