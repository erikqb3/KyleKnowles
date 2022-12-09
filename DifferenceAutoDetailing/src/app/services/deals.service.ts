import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deal } from '../models/haveIDs/deal.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  private deals: Deal[] = [];
  private fireBase_link: string = "https://localhost:7057/api/Deals";
  public dealsChangedEvent = new Subject<Deal[]>();
  public addNewDeal: boolean = false;

  constructor(
    private http: HttpClient
  ) {
   }

  getDeals(){
    this.http
      .get<Deal[]>(this.fireBase_link)
        .subscribe(
          (deals: Deal[]) => {
            this.deals = deals;
            this.dealsChangedEvent.next(this.deals);
            // console.log(this.deals);
            return this.deals;
          }
        )
  }

  onDelete(deal: Deal){
  if (!deal){
    return;
  }
  const pos = this.deals.indexOf(deal);
  if (pos < 0){
    return;
  }

  this.deals.splice(pos,1);
  // this.dealStore();
  }



}
