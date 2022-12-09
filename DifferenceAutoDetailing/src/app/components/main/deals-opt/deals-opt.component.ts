import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from 'src/app/models/haveIDs/deal.model';
import { Features } from 'src/app/models/haveIDs/feature.model';
import { Deals_N_FeaturesService } from 'src/app/services/deals_N_features.service';

@Component({
  selector: 'app-deals-opt',
  templateUrl: './deals-opt.component.html',
  styleUrls: ['./deals-opt.component.scss']
})
export class DealsOptComponent implements OnInit, OnDestroy {
  deals: Deal[] = [];
  dealsChangedEvent_sub: Subscription;
  features: Features[] = [];
  featuresChangedEvent_sub: Subscription;

  constructor(private d_N_fService: Deals_N_FeaturesService) { }

  ngOnInit(): void {
    this.d_N_fService.getDeals();
    this.dealsChangedEvent_sub = this.d_N_fService.dealsChangedEvent
      .subscribe(
        (deals: Deal[]) => {
          this.deals = deals;
          console.log(this.deals);

        }
      )

    this.d_N_fService.getFeatures();
    this.featuresChangedEvent_sub = this.d_N_fService.featuresChangedEvent
      .subscribe(
        (features: Features[]) => {
          this.features = features;
        }
      )
  }

  ngOnDestroy(): void {
    this.dealsChangedEvent_sub.unsubscribe;
    this.featuresChangedEvent_sub.unsubscribe;
  }

}
