import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home-opt',
  templateUrl: './home-opt.component.html',
  styleUrls: ['./home-opt.component.scss']
})
export class HomeOptComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  photosChangedEvent_sub: Subscription;

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
    this.photoService.getPhotos();
    this.photosChangedEvent_sub = this.photoService.photosChangedEvent
      .subscribe(
        (photoArray: Photo[])=> {
          this.photos = photoArray;
          console.log(this.photos);
        }
      )
  }

  ngOnDestroy():void {
    this.photosChangedEvent_sub.unsubscribe();
  }

}
