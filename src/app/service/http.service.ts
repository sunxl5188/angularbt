import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private url = 'http://www.fj2h.com';

    constructor(
        private http: HttpClient
    ) {
    }

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'})
    };

    // 获取数据信息
    getAllData(data): Observable<any> {
        return this.http.get(this.url + '', data);
    }
}
