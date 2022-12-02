import { Component, Input, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { ReviewsOptService } from 'src/app/services/reviews-opt.service';

@Component({
  selector: 'app-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.scss']
})
export class SingleReviewComponent implements OnInit {
  @Input()review!: Review;

  
  constructor(
    private reviewService: ReviewsOptService
  ) { }

  ngOnInit(): void {
    this.reviewService.getStars(this.review, this.review?.rating)
  }



}
