import { Injectable, Component } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BOOKING_API_GATEWAY, BOOKING_MOCKOON} from "app/app.api";
import { Observable } from "rxjs";

import { map } from 'rxjs/operators';
import { Home } from "./home.model";


@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {
  }




 getHomeDetails(): Observable<Home> {
    
    return this.http.get<Home>(`${BOOKING_API_GATEWAY}/home`)

  }

}