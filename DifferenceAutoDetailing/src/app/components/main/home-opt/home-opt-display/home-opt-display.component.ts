import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/services/photo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-opt-display',
  templateUrl: './home-opt-display.component.html',
  styleUrls: ['./home-opt-display.component.scss']
})
export class HomeOptDisplayComponent implements OnInit {
  id: string;
  first: Photo;
  second: Photo;

  constructor(
    private photoService: PhotosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.first = this.photoService.getPhoto(this.id);
          this.second = this.photoService.getSecondary(this.first);
        }
      )
  }

  returnToHome():void{
    this.router.navigateByUrl('/')
  }

}
