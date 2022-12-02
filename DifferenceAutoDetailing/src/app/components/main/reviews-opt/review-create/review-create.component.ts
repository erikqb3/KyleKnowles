import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../../../../models/review.model';
import { ReviewsOptService } from 'src/app/services/reviews-opt.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit {
  review!: Review;

  constructor(
    private reviewService: ReviewsOptService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    // const today = new Date();
    const dateNow = Date.now();

    const newReview = new Review(
      this.reviewService.getMaxId().toString(),
      value.reviewer,
      value.rating,
      new Date(dateNow).toDateString(),
      value.reviewText,
      ""
    );
    console.log(newReview);
    this.reviewService.addReview(newReview);
    form.reset();
  }
}
