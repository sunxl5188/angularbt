import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Config, ConfigService} from './detail.service';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [ConfigService]
})

export class DetailComponent implements OnInit {
    id = null;
    headers: string[];
    config: Config;
    error: any;

    constructor(
        private configService: ConfigService,
        private router: ActivatedRoute,
        private TitleServe: Title
    ) {
        TitleServe.setTitle('信息详细页');
    }

    ngOnInit() {
        this.id = this.router.snapshot.queryParams['id'];

    }

    showConfig() {
        this.configService.getConfig()
            .subscribe(
                (data: Config) => this.config = {...data}, // success path
                error => this.error = error // error path
            );
    }

}
