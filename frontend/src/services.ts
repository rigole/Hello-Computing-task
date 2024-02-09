import {  HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

// class for api calling
export class ApiServiceService{

    private urlBackend = 'http://localhost:8000'
    constructor(private http:HttpClient){}

    getFigures():Observable<any>{
        return this.http.get(`${this.urlBackend}/api/figures`);
    }
    
    getUnits():Observable<any>{
        return this.http.get(`${this.urlBackend}/api/units`);
    }

    getAreaUnits():Observable<any>{
        return this.http.get(`${this.urlBackend}/api/areaunits`);
    }
}

