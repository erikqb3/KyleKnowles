import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deals } from '../models/deals.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  private deals: Deals;
  private fireBase_link: string = "https://kyleknowles-749f3-default-rtdb.firebaseio.com/Deals.json";
  public dealsChangedEvent = new Subject<Deals>();


  constructor(
    private http: HttpClient
  ) {
   }

  getDeals(){
    this.http
      .get<Deals>(this.fireBase_link)
        .subscribe(
          (deals: Deals) => {
            this.deals = deals;
            console.log(this.deals)
            return this.deals;
          }
        )
  }





}
