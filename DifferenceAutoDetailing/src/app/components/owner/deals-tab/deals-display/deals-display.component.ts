import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Deal } from 'src/app/models/haveIDs/deal.model';
import { DealsService } from 'src/app/services/deals.service';
// import { Deals_N_FeaturesService } from 'src/app/services/deals_N_features.service'

@Component({
  selector: 'app-deals-display',
  templateUrl: './deals-display.component.html',
  styleUrls: ['./deals-display.component.scss']
})
export class DealsDisplayComponent implements OnInit {
  deals: Deal[] = [];
  dealsChangedEvent_sub: Subscription;


  constructor(
    private dealsService: DealsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dealsService.getDeals();
    this.dealsChangedEvent_sub = this.dealsService.dealsChangedEvent
      .subscribe(
        (deals: Deal[]) => {
          this.deals = deals;
          console.log(this.deals);
        }
      )
  }

}
