import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../service/http.service';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [HttpService]
})
export class DetailComponent implements OnInit {
    id = null;

    constructor(
        private router: ActivatedRoute,
        private TitleServe: Title,
        private ax: HttpService
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
        this.ax.postData('demo/data.php?action=all', {
            id: 1,
            name: 'abc',
            sex: '1'
        }).subscribe(res => {
            console.log(res);
        });
    }

}
