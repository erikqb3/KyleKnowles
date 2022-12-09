import { Component, Input, OnInit } from '@angular/core';
import { Deal } from 'src/app/models/haveIDs/deal.model';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  @Input()singleDeal: Deal;

  constructor() { }

  ngOnInit(): void {
  }

}
