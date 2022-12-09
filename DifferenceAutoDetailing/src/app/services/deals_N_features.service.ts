import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deal } from '../models/haveIDs/deal.model';
import { Subject } from 'rxjs';
import { Features } from '../models/haveIDs/feature.model';

@Injectable({
  providedIn: 'root'
})
export class Deals_N_FeaturesService {
  private deals: Deal[] = [];
  private fireBase_link: string = "https://localhost:7057/api/Deals";
  public dealsChangedEvent = new Subject<Deal[]>();
  public addNewDeal: boolean = false;


  private features: Features[] = [];
  private fireBase_link_features: string = "https://localhost:7057/api/Features";
  public featuresChangedEvent = new Subject<Features[]>();


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




















  
  getFeatures(){
    this.http
    .get<Features[]>(this.fireBase_link_features)
      .subscribe(
        (features: Features[]) => {
          this.features = features;
          this.featuresChangedEvent.next(this.features);
          // console.log(this.features);
          return this.features;
        }
      )
  }





}
