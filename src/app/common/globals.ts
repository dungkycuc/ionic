import { HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { cpuUsage } from "process";

@Injectable()
export class Globals {
    getHeadersWithAuth = () => {
        const headers: HttpHeaders = new HttpHeaders().set(
            "Authorization",
            `Bearer ${this.getToken}`
        );
        return headers;
    }
    getHeadersWithoutAuth = () => {
        const headers: HttpHeaders = new HttpHeaders().set("Content-Type", "application/json");
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append(
            "Access-Control-Allow-Methods",
            "POST, GET, OPTIONS, DELETE, PUT"
        );
        return headers;
    };
    getToken = () => {
        const token = localStorage.getItem("token");
        return token ? token : ''
    }
    noWhitespaceValidator(control: FormControl) {
        const isWhitespace = (control.value || "").trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { required: true };
    }
}
