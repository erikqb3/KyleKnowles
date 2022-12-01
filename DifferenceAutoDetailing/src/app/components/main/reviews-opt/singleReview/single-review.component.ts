import { Component, Input, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { Review } from '../review.model';

@Component({
  selector: 'app-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.scss']
})
export class SingleReviewComponent implements OnInit {
  @Input()review!: Review;

  
  constructor() { }

  ngOnInit(): void {
    console.log(this.review);
    this.getStars(this.review?.rating)
  }

  getStars(rating:number): void {
    for (let i = 0; i < rating; i++){
      this.review.starCount += "⭐";
    }
  }

}
