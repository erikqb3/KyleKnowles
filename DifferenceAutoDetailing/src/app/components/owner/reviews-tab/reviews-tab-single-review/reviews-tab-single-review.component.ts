import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews-tab-single-review',
  templateUrl: './reviews-tab-single-review.component.html',
  styleUrls: ['./reviews-tab-single-review.component.scss']
})
export class ReviewsTabSingleReviewComponent implements OnInit {
@Input()review!: Review;
@Input()reviewId: number;
@Output() reviewTagSelected = new EventEmitter<void>();

  constructor(
    private reviewService: ReviewsService
  ) { }

  ngOnInit(): void {
    this.reviewService.getStars(this.review, this.review.rating);
  }

}
