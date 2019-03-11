import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
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
export class HttpUtilsService {
    baseUrl = 'http://www.js.me/';

    constructor(
        private http: HttpClient
    ) {
    }

    // 统一发送请求
    Request(params: any): Observable<any> {
        if (params['method'].toLowerCase() === 'post') {
            return this.get(params['url'], params['data']);
        }
        if (params['method'].toLowerCase() === 'get') {
            return this.get(params['url'], params['data']);
        }
        return;
    }

    public get(url: string, data: any): any {
        const params = new HttpParams();
        for (const i of Object.keys(data)) {
            console.log(i);
        }
        return this.http.get(this.baseUrl + url, {params})
            .toPromise()
            .then()
            .catch(res => {
                console.log(res);
            });
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
