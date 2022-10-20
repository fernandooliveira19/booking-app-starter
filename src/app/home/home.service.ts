import { Injectable, Component } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BOOKING_API_GATEWAY} from "app/app.api";
import { Observable } from "rxjs";
import { NgbDate, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';



@Injectable()
export class HomeService {


  constructor(private http: HttpClient) {

  }

  reservedDates(): Observable<NgbDateStruct[]> {

    return this.http.get<NgbDateStruct[]>(`${BOOKING_API_GATEWAY}/home`)

  }

  

}