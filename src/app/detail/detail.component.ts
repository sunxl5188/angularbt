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
    headers: string[];
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

    showConfig() {
        this.http.get('?action=all', this.id)
            .subscribe(
                (data: Config) => this.config = {...data}, // success path
                error => this.error = error // error path
            );
    }

    showConfigResponse() {
        /*this.configService.getConfigResponse()
            .subscribe(
                resp => {
                    const keys = resp.headers.keys();
                    this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
                    this.config = {...resp.body};
                },
                error => this.error = error
            );*/
    }

}
