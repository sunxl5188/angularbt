import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

export interface Config {
    title: string;
    content: string;
}

const headers = new HttpHeaders({
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8',
    'X-CustomToken': 'value+'
})

@Injectable()

export class ConfigService {
    // configUrl = 'assets/config.json';
    configUrl = 'http://www.js.me/demo/data.php?action=all';

    // configUrl = 'http://www.applyoversea.com/Mobile/School/mList';

    constructor(
        private  http: HttpClient
    ) {
    }

    getConfig() {
        const params = new HttpParams()
            .set('id', '123');

        return this.http.get<Config>(this.configUrl, { headers, params })
            .pipe(
                retry(3), // 最多重试3次失败的请求
                catchError(this.handleError) // 然后处理错误
            );
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        const params = new HttpParams()
        .set('id', '1212');
        return this.http.get<Config>(
            this.configUrl, {observe: 'response', headers, params}
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // 发生客户端或网络错误。相应处理。
            console.error('发生了一个错误:', error.error.message);
        } else {
            // 后端返回一个不成功的响应代码。
            // 响应主体可能包含关于出错原因的线索，
            console.error(
                `后端返回代码 ${error.status}, ` +
                `错误内容: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            '访问出现问题，请稍后再试!');
    }
}
