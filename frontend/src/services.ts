import {  HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ApiServiceService{
    constructor(private http:HttpClient){}

    getFigures(){
        return this.http.get("http://localhost:8000/figures");
    }
    
    getUnits(){
        return this.http.get("http://localhost:8000/units")
    }
}

