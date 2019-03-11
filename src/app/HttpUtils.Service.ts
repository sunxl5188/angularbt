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
            return this.get(params['url'], params['id']);
        }
    }

    /**
     * GET请求
     * @param url 请求地址
     * @param id 只接收参数ID
     */
    public get(url: string, id: string): Observable<any> {
        const params = new HttpParams()
            .set('id', id);
        return this.http.get(this.baseUrl + url, {params});
    }

    // POST 请求信息
    post(url: string, params: object): Observable<any> {
        return this.http.post(this.baseUrl + url, params, httpOptions);
    }
}
