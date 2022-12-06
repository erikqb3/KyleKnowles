import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deals } from '../models/deals.model';
import { Subject } from 'rxjs';
import { Features } from '../models/features.model';

@Injectable({
  providedIn: 'root'
})
export class Deals_N_FeaturesService {
  private deals: Deals[] = [];
  private features: Features[] = [];
  private fireBase_link: string = "https://kyleknowles-749f3-default-rtdb.firebaseio.com/Deals.json";
  private fireBase_link_features: string = "https://kyleknowles-749f3-default-rtdb.firebaseio.com/Features.json";
  public dealsChangedEvent = new Subject<Deals[]>();
  public featuresChangedEvent = new Subject<Features[]>();


  constructor(
    private http: HttpClient
  ) {
   }

  getDeals(){
    this.http
      .get<Deals[]>(this.fireBase_link)
        .subscribe(
          (deals: Deals[]) => {
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
