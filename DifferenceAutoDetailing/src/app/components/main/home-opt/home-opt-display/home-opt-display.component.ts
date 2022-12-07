import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home-opt-display',
  templateUrl: './home-opt-display.component.html',
  styleUrls: ['./home-opt-display.component.scss']
})
export class HomeOptDisplayComponent implements OnInit {
  @Input()photo!: Photo;

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
    console.log(this.photo);
  }

}
