import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deals } from 'src/app/models/deals.model';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals-opt',
  templateUrl: './deals-opt.component.html',
  styleUrls: ['./deals-opt.component.scss']
})
export class DealsOptComponent implements OnInit {
  deals: Deals;
  featuresOpt: string[];
  dealsChangedEvent_sub: Subscription;

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    this.dealsService.getDeals();
    this.dealsChangedEvent_sub = this.dealsService.dealsChangedEvent
      .subscribe(
        (dealsObj: Deals) => {
          this.deals = dealsObj;
          this.featuresOpt = dealsObj.FeaturesOpt;
        }
      )
  }

}
