import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from '../../../models/review.model';
import { ReviewsOptService } from 'src/app/services/reviews.service'

@Component({
  selector: 'app-reviews-opt',
  templateUrl: './reviews-opt.component.html',
  styleUrls: ['./reviews-opt.component.scss']
})
export class ReviewsOptComponent implements OnInit, OnDestroy {
  reviews: Review[] = [];
  reviewChangedEvent_sub?: Subscription;

  constructor(private reviewService: ReviewsOptService) { }

  ngOnInit(): void {
    this.reviewService.getReviews();
    this.reviewChangedEvent_sub = this.reviewService.reviewChangedEvent
      .subscribe(
        (reviewArray: Review[])=> {
          this.reviews = reviewArray;
        }
      )
  }

  ngOnDestroy(): void {
    this.reviewChangedEvent_sub?.unsubscribe();
  }

}
