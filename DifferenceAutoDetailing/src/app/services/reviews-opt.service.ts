import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs';
// import { ContactOptComponent } from '../contact-opt/contact-opt.component';

@Injectable({
  providedIn: 'root'
})
export class ReviewsOptService {
  private reviews: Review[] = [];
  private fireBase_link: string = "https://kyleknowles-749f3-default-rtdb.firebaseio.com/Reviews.json";
  private currentId!: number;
  public reviewTagSelectedEvent = new Subject<Review>();
  public reviewChangedEvent = new Subject<Review[]>();
  public maxReviewId!: number;
  public gottenReview: Review;

  constructor(
    private http: HttpClient
  ) { 
    this.reviews = [];
  }

  addReview(newReview: Review){
    if ((newReview == null)||(newReview == undefined)){
      return;
    }
    this.maxReviewId++;
    newReview.id = this.maxReviewId.toString();
    this.reviews.push(newReview);
    this.storeReview();

  }

  getMaxId():number {
    let maxId = 0;

    this.reviews.forEach(review => {
      this.currentId =+ review.id;
      if (this.currentId > maxId){
        maxId = this.currentId;
      } 
    });
    return maxId;
  }
  getReviews(){
    this.http
      .get<Review[]>(this.fireBase_link)
        .subscribe(
          (reviews: Review[])=>{
            this.reviews = reviews;
            this.reviewChangedEvent.next(this.reviews.slice());
            // console.log(this.reviews);
            // console.log(reviews);
            return this.reviews;
          }
        )
  }
  getReview(id:string): Review {
    console.log(this.reviews);
    this.reviews.forEach(singleReview => {
      if (id == singleReview.id) {
        this.gottenReview = singleReview;
      }
    });
    return this.gottenReview;
  }
  getStars(review:Review, rating:number): void {
    for (let i = 0; i < rating; i++){
      review.starCount += "⭐";
    }
  }

  storeReview(){
    const storedReview = this.reviews;
    this.http
      .put(this.fireBase_link, storedReview)
        .subscribe(response => {
          this.reviewChangedEvent.next(this.reviews.slice());
        })
  }


}
