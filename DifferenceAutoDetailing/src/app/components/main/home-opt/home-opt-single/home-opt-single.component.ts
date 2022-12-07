import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home-opt-single',
  templateUrl: './home-opt-single.component.html',
  styleUrls: ['./home-opt-single.component.scss']
})
export class HomeOptSingleComponent implements OnInit {
@Input()photo!: Photo;

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
    console.log(this.photo);
  }

}
