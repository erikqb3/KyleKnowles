import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../review.model';
import { ReviewsOptService } from '../reviews-opt.service';

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
    console.log(value);
    const newReview = new Review(
      this.reviewService.getMaxId().toString(),
      value.reviewer,
      value.rating,
      new Date(),
      value.reviewText,
      "",
      true
    );
    this.reviewService.addReview(newReview);
    form.reset();
  }
}
