import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews-tab-display',
  templateUrl: './reviews-tab-display.component.html',
  styleUrls: ['./reviews-tab-display.component.scss']
})
export class ReviewsTabDisplayComponent implements OnInit {
  id: string;
  review: Review;

  constructor(private reviewService: ReviewsService,
              private router: Router,
              private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.review = this.reviewService.getReview(this.id);
        }
      )
  }

  onDelete(){
    console.log(this.review);
    this.reviewService.onDelete(this.review);
    this.router.navigateByUrl('owner/reviews')
  }

}
