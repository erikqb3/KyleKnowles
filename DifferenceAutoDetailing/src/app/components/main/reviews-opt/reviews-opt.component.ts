import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from '../../../models/haveIDs/review.model';
import { ReviewsService } from 'src/app/services/reviews.service'

@Component({
  selector: 'app-reviews-opt',
  templateUrl: './reviews-opt.component.html',
  styleUrls: ['./reviews-opt.component.scss']
})
export class ReviewsOptComponent implements OnInit, OnDestroy {
  reviews: Review[] = [];
  reviewChangedEvent_sub: Subscription;

  constructor(private reviewService: ReviewsService) { }

  ngOnInit(): void {
    console.log("START")
    this.reviewService.getReviews();
    this.reviewChangedEvent_sub = this.reviewService.reviewChangedEvent
      .subscribe(
        (reviewArray: Review[])=> {
          this.reviews = reviewArray;
          console.log(this.reviews);
        }
      )
  }

  ngOnDestroy(): void {
    this.reviewChangedEvent_sub.unsubscribe();
  }

}
