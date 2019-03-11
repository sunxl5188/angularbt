import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HttpUtilsService} from '../HttpUtils.Service';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [HttpUtilsService]
})
export class DetailComponent implements OnInit {
    id = null;

    constructor(
        private router: ActivatedRoute,
        private TitleServe: Title,
        private ax: HttpUtilsService
    ) {
        TitleServe.setTitle('信息详细页');
    }

    ngOnInit() {
        this.id = this.router.snapshot.queryParams['id'];
        this.getInfo();
        /* this.http.getAllData({}).subscribe(data => {
             console.log(data);
         });*/
        // this.http.getAllData() https://blog.csdn.net/weixin_41623959/article/details/82849470
    }

    getInfo(): void {
        this.ax.Request({
            method: 'GET',
            url: 'demo/data.php?action=all',
            data: {
                id: 1,
                name: '请求',
                title: '标题'
            }
        });
    }

}
