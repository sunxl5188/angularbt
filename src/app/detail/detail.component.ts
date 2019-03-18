import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Config, HttpUtilsService} from '../HttpUtils.Service';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [HttpUtilsService]
})

export class DetailComponent implements OnInit {
    id = null;
    headers: string;
    config: Config;
    error: any;

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
        this.http.get('?action=all', this.id)
            .subscribe(
                (data: Config) => this.config = {...data}, // success path
                error => this.error = error // error path
            );
    }

    showPost() {
        this.http.post('?action=all', {
            title: '111',
            content: '23ewrwr',
            type: 2,
            name: 'myform'
        }).subscribe(
            (data) => this.config = {...data},
            error => this.error = error
        );
    }

}
