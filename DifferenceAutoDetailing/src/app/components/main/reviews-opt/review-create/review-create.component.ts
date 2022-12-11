import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/models/haveIDs/review.model';
import { newReview } from 'src/app/models/noIDs/newReview.model';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit {
  review!: Review;

  constructor(
    private reviewService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const value = form.value;
    // const today = new Date();
    const dateNow = Date.now();
    const newId = (this.reviewService.getMaxId() + 1).toString();
    console.log(newId);

    const postReview = new newReview(
      value.reviewer,
      value.rating,
      new Date(dateNow).toDateString(),
      value.reviewText,
      "starcount",
      true
    );
    console.log(postReview);
    this.reviewService.addReview(postReview);
    form.reset();
    this.router.navigateByUrl('/reviews');
  }
}
