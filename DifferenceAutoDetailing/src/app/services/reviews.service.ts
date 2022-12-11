import { Injectable } from '@angular/core';
import { Review } from '../models/haveIDs/review.model';
import { newReview } from '../models/noIDs/newReview.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs';
// import { ContactOptComponent } from '../contact-opt/contact-opt.component';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  // deleteReview(review: Review) {
  //   throw new Error('Method not implemented.');
  // }
  private reviews: Review[] = [];
  // private fireBase_link: string = "https://kyleknowles-749f3-default-rtdb.firebaseio.com/Reviews.json";
  private fireBase_link: string = "https://localhost:7057/api/Reviews";
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

  addReview(postReview: newReview){
    if ((newReview == null)||(newReview == undefined)){
      return;
    }

    this.http
      .post(this.fireBase_link, postReview)
        .subscribe(response => {
          this.reviewChangedEvent.next(this.reviews.slice());
        })
  }

  getMaxId():number {
    let maxId = 0;

    this.reviews.forEach(review => {
      console.log(review.Id)
      this.currentId =+ review.Id;
      if (this.currentId > maxId){
        maxId = this.currentId;
      } 
    });
    console.log(maxId);
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
    // console.log(this.reviews);
    // console.log(id);
    this.reviews.forEach(singleReview => {
      // console.log(singleReview);
      if (id == singleReview.Id) {
        this.gottenReview = singleReview;
      }
    });
    return this.gottenReview;
  }
  getStars(review:Review, rating:number): void {
    if (review.starCount == "starcount"){
      review.starCount = "";
      for (let i = 0; i < rating; i++){
        review.starCount += "⭐";
      }
    }
  }
  onDelete(review: Review){
    if (!review){
      return;
    }
    var Id = review.Id;
    // console.log(Id)
    this.http
    .delete(this.fireBase_link + '/' + Id)
        .subscribe(response => {
          this.reviewChangedEvent.next(this.reviews.slice());
        })
  } 

  updateApproval(review: Review){
    this.http
      .put(this.fireBase_link + '/' + review.Id, review)
        .subscribe(response => {
          this.reviewChangedEvent.next(this.reviews.slice())
          console.log(response);
        })
  }

  // storeReview(reviewChange: Review){
  //   console.log(reviewChange);
  //   // const storedReview = this.reviews;
  //   this.http
  //     .put(this.fireBase_link, reviewChange)
  //       .subscribe(response => {
  //         this.reviewChangedEvent.next(this.reviews.slice());
  //       })
  // }


}
