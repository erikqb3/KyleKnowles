import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from 'src/app/models/haveIDs/photo.model';

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
