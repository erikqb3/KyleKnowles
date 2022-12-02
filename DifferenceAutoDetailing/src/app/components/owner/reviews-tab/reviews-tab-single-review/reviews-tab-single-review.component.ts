import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { ReviewsOptService } from 'src/app/services/reviews-opt.service';

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
    private reviewService: ReviewsOptService
  ) { }

  ngOnInit(): void {
    this.reviewService.getStars(this.review, this.review.rating);
    // const review: Review = this.reviewService.getReview(this.review.id);
  }

}
