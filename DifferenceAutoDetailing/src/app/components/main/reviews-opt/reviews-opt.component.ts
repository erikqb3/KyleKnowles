import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from './review.model';
import { ReviewsOptService } from './reviews-opt.service';

@Component({
  selector: 'app-reviews-opt',
  templateUrl: './reviews-opt.component.html',
  styleUrls: ['./reviews-opt.component.scss']
})
export class ReviewsOptComponent implements OnInit {
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

}
