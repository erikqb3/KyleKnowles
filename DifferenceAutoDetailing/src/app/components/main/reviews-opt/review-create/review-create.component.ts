import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../../../../models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit {
  review!: Review;

  constructor(
    private reviewService: ReviewsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    // const today = new Date();
    const dateNow = Date.now();
    const newId = (this.reviewService.getMaxId() + 1).toString();
    console.log(newId);

    const newReview = new Review(
      newId,
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
