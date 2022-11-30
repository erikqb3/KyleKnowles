import { Injectable } from '@angular/core';
import { Review } from './review.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsOptService {
  private reviews: Review[] = [];
  private fireBase_link: string = "https://kyleknowles-749f3-default-rtdb.firebaseio.com/Reviews.json"
  public reviewChangedEvent = new Subject<Review[]>();

  constructor(
    private http: HttpClient
  ) { 
    this.reviews = [];
  }
  getReviews(){
    this.http
      .get<Review[]>(this.fireBase_link)
        .subscribe(
          (reviews: Review[])=>{
            this.reviews = reviews;
            this.reviewChangedEvent.next(this.reviews.slice());
            console.log(this.reviews);
            console.log(reviews);
            return this.reviews;
          }
        )
  }

}
