import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deals } from 'src/app/models/deals.model';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals-opt',
  templateUrl: './deals-opt.component.html',
  styleUrls: ['./deals-opt.component.scss']
})
export class DealsOptComponent implements OnInit, OnDestroy {
  deals: Deals[] = [];
  featuresOpt: string[];
  dealsChangedEvent_sub: Subscription;

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    this.dealsService.getDeals();
    this.dealsChangedEvent_sub = this.dealsService.dealsChangedEvent
      .subscribe(
        (deals: Deals[]) => {
          this.deals = deals;
          var scrap;
          var scrap2;
          scrap = Object.values(this.deals);
          // this.featuresOpt = scrap[1]
          console.log(this.deals);
          console.log(scrap2);

        }
      )
  }

  ngOnDestroy(): void {
    this.dealsChangedEvent_sub.unsubscribe;
  }

}
