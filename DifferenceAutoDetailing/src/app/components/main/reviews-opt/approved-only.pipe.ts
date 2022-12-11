import { Pipe, PipeTransform } from '@angular/core';
import { Review } from 'src/app/models/haveIDs/review.model';

@Pipe({
  name: 'approvedOnly',
  pure: false
})
export class ApprovedOnlyPipe implements PipeTransform {

  transform(reviews: Review[], isApproved: boolean): any {
    const filteredReviews: Review[] = [];

    reviews.forEach(singleReview => {
      if (singleReview.approved == isApproved){
        filteredReviews.push(singleReview);
      }
    });
    if (filteredReviews.length < 1) {
      return reviews;
    }
    
    return filteredReviews;
  }

}
