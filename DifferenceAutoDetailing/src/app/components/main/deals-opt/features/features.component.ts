import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deals } from 'src/app/models/deals.model';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  @Input()deals!: Deals;
  
  constructor() { }
  ngOnInit(): void {
    // console.log(this.deals)
    
  }

}
