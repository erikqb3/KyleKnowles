import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-reviews-tab-single-review',
  templateUrl: './reviews-tab-single-review.component.html',
  styleUrls: ['./reviews-tab-single-review.component.scss']
})
export class ReviewsTabSingleReviewComponent implements OnInit {
@Input()review!: Review;
@Output() reviewTagSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.review);
  }

}
