// GLOBAL IMPORT
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Globals } from "../common/globals";
import { Consts } from "./const";
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        @Inject(HttpClient) private httpClient: HttpClient,
        @Inject(Router) private router: Router,
        @Inject(Globals) private globals: Globals
    ) {
    }

    signin = (username: string, password: string): Observable<any> => {
        const url_request = Consts.API_URL_AUTH;
        const body_request = {
            username: username,
            password: password
        };
        const headers = this.globals.getHeadersWithoutAuth();
        return this.httpClient.post(url_request, body_request, { headers: headers });
    };
    // save the token in localStorage and change the navbar state
    saveToken = (token: string, username: string, userInfo?: string): void => {
        if (username !== null) {
            localStorage.setItem("username", username);
        }
        localStorage.setItem("token", token);
        if (userInfo) {
            localStorage.setItem("userInfo", userInfo);
        }
    };

}
