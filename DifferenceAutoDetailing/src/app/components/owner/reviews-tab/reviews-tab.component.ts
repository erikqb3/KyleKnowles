import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from '../../../models/review.model';
import { ReviewsOptService } from '../../../services/reviews-opt.service';

@Component({
  selector: 'app-reviews-tab',
  templateUrl: './reviews-tab.component.html',
  styleUrls: ['./reviews-tab.component.scss']
})
export class ReviewsTabComponent implements OnInit, OnDestroy {
  reviews: Review[] = [];
  selectedReview: Review;
  reviewChangedEvent_sub?: Subscription;
  reviewSelectedEvent_sub?: Subscription;

  constructor(private reviewService: ReviewsOptService) { }

  ngOnInit(): void {
    this.reviewService.getReviews();
    this.reviewChangedEvent_sub = this.reviewService.reviewChangedEvent
      .subscribe(
        (reviewArray: Review[]) =>{
          this.reviews = reviewArray;
          console.log(this.reviews);
        }
      )
    this.reviewSelectedEvent_sub = this.reviewService.reviewTagSelectedEvent
        .subscribe(
          (review: Review) => {
            this.selectedReview = review;
          }
        )
  }

  ngOnDestroy(): void {
    this.reviewChangedEvent_sub?.unsubscribe();
  }

  onReviewTagSelected(review: Review){
    this.reviewService.reviewTagSelectedEvent.next(review);
  }

}
