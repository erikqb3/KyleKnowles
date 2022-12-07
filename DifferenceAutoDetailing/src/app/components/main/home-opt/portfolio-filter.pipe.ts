import { Pipe, PipeTransform } from '@angular/core';
import { Deals } from 'src/app/models/deals.model';
import { Photo } from 'src/app/models/photo.model';

@Pipe({
  name: 'portfolioFilter',
  pure: false
})
export class PortfolioFilterPipe implements PipeTransform {

  transform(photos: Photo[], term: string): any {
    const filteredPhotos: Photo[] = [];

    photos.forEach(photo => {
      if (photo.type == term){
        filteredPhotos.push(photo);
      }
    });

    if (filteredPhotos.length < 1){
      return photos;
    }

    return filteredPhotos;
  }

}
