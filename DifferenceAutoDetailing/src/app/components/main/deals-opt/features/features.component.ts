import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from 'src/app/models/deals.model';
import { Features } from 'src/app/models/features.model';
import { Deals_N_FeaturesService } from 'src/app/services/deals_N_features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  @Input() singleFeature: Features;
  
  constructor() { }
  ngOnInit(): void {
    // console.log(this.singleFeature)
    // console.log(this.deals);
    // console.log(this.featuresOpt);
    
  }

}
