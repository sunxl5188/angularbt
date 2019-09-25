import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

export interface Config {
    title: string;
    content: string;
    types: number;
}

const headers = new HttpHeaders({
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8',
    'X-CustomToken': 'value+',
    'X-XSRF-TOKEN': 'ToKenValue--'
});

@Injectable({
    providedIn: 'root'
})

export class HttpUtilsService {
    // 定义请求域名
    baseUrl = 'http://www.js.me/demo/data.php';

     constructor(
        private $http: HttpClient,
    ) {
    }
    /**
     * GET请求
     * @param-url
     * @param-data
     */
    public get(url: string, data: {}): Observable<{}> {
        const params = new HttpParams({
            fromObject: data
        });
        return this.$http.get<{}>(this.baseUrl + url, {headers, params}
        ).pipe(
            retry(3), // 最多重试3次失败的请求
            catchError(this.handleError) // 然后处理错误
        );
    }
    /**
     * POST请求
     * @param-url
     * @param-params
     */
    public post(url, params): Observable<{}> {
        return this.$http.post<{}>(this.baseUrl + url, params, {headers})
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }
    /**
     * 本地JSON请求
     * @param-url
     */
    public getJSON(url): Observable<{}> {
        return this.$http.get(url, {headers})
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    /**
     * 获取错误详情
     * @param-error
     */
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
