import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HttpUtilsService} from '../shared/HttpUtils.Service';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [HttpUtilsService]
})

export class DetailComponent implements OnInit {
    id = null;
    headers: string;
    error: any;
    details: object;

    constructor(
        private http: HttpUtilsService,
        private router: ActivatedRoute,
        private TitleServe: Title
    ) {
        TitleServe.setTitle('信息详细页');
    }

    ngOnInit() {
        this.id = this.router.snapshot.queryParams['id'];
    }

    showGet() {
        this.http.get('?action=all', { id: this.id, fid: '23344' })
            .subscribe(
                (data) => this.details = data, // success path
                error => this.error = error // error path
            );
    }
    getJson() {
        this.http.getJSON('/assets/json/city.json').subscribe(
            (data) => console.log(data),
            error => this.error = error
        );
    }

}
