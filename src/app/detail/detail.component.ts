import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {HttpUtilsService} from '../HttpUtils.Service';
import {catchError, retry} from 'rxjs/operators';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [HttpUtilsService]
})

export class DetailComponent implements OnInit {
    id = null;
    configUrl = 'assets/test.json';

    constructor(
        private http: HttpClient,
        private router: ActivatedRoute,
        private TitleServe: Title,
        private ax: HttpUtilsService
    ) {
        TitleServe.setTitle('信息详细页');
    }

    ngOnInit() {
        this.id = this.router.snapshot.queryParams['id'];
        this.getJson().subscribe(res => {
            console.log(res);
        });
    }

    getInfo(): void {
        this.ax.Request({
            method: 'GET',
            url: 'demo/data.php?action=all',
            id: 1
        }).subscribe(res => {
            console.log(res.data.title);
        });
    }

    getJson() {
        return this.http.get(this.configUrl)
            .pipe(
                retry(3),
                catchError(res => {
                    console.log(res);
                    return res;
                })
            );
    }

}
