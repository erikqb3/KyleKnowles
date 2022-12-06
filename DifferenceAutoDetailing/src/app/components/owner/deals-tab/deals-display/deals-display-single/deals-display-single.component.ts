import { Component, Input, OnInit } from '@angular/core';
import { Deals } from 'src/app/models/deals.model';

@Component({
  selector: 'app-deals-display-single',
  templateUrl: './deals-display-single.component.html',
  styleUrls: ['./deals-display-single.component.scss']
})
export class DealsDisplaySingleComponent implements OnInit {
@Input() singleDeal: Deals;
  constructor() { }

  ngOnInit(): void {
    console.log(this.singleDeal);
  }

}
