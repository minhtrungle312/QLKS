import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {

    }
    doPost(url: any, param: any): any {
        console.log('POST: ' + this.baseUrl + url + ' --- PARAM: ' + JSON.stringify(param));
        const result = this.http.post(this.baseUrl + url, param);
        return result;
    }
}
