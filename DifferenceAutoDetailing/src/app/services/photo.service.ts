import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { Subject } from 'rxjs';
import { Features } from '../models/features.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private photos: Photo[] = [];
  private fireBase_link: string = "https://kyleknowles-749f3-default-rtdb.firebaseio.com/Photos.json";
  public photosChangedEvent = new Subject<Photo[]>();
  public maxPhotoId!: number;
  public gottenPhoto: Photo;
  public secondaryPhoto: Photo;
  

  constructor(
    private http: HttpClient
  ) {
   }

  getPhotos(){
    this.http
      .get<Photo[]>(this.fireBase_link)
        .subscribe(
          (photos: Photo[]) => {
            this.photos = photos;
            this.photosChangedEvent.next(this.photos.slice());
            // console.log(this.photos);
            return this.photos;
          }
        )
  }

  getPhoto(id:string): Photo {
    // console.log(this.photos);
    this.photos.forEach(singlePhoto => {
      if (id == singlePhoto.id) {
        this.gottenPhoto = singlePhoto;
      }
    });
    return this.gottenPhoto;
  }
  getSecondary(first:Photo):Photo{
    this.photos.forEach(singlePhoto => {
      if (singlePhoto.category == first.category){
        this.secondaryPhoto=singlePhoto;
      }
    });
    console.log(first, this.secondaryPhoto);
    return this.secondaryPhoto;
  }

}
