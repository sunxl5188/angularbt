import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        'Content-Type': 'application/json;charset=UTF-8'
    })
};

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    baseUrl = 'http://www.js.me/';

    constructor(
        private http: HttpClient
    ) {
    }

    // GET获取信息
    getAllData(url: string, id: any): Observable<any> {
        const params = new HttpParams().set('id', id);
        return this.http.get(this.baseUrl + url, {params});
    }

    // POST 请求信息
    postData(url: string, params: object): Observable<any> {
        return this.http.post(this.baseUrl + url, params, httpOptions);
    }
}
