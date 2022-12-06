import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Deals } from 'src/app/models/deals.model';
import { Deals_N_FeaturesService } from 'src/app/services/deals_N_features.service'

@Component({
  selector: 'app-deals-display',
  templateUrl: './deals-display.component.html',
  styleUrls: ['./deals-display.component.scss']
})
export class DealsDisplayComponent implements OnInit {
  deals: Deals[] = [];
  dealsChangedEvent_sub: Subscription;


  constructor(
    private d_N_fService: Deals_N_FeaturesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.d_N_fService.getDeals();
    this.dealsChangedEvent_sub = this.d_N_fService.dealsChangedEvent
      .subscribe(
        (deals: Deals[]) => {
          this.deals = deals;
          console.log(this.deals);
        }
      )
  }

}
