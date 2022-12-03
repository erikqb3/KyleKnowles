import { Component, Input, OnInit } from '@angular/core';
import { Deals } from 'src/app/models/deals.model';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  @Input()singleDeal: Deals;

  constructor() { }

  ngOnInit(): void {
  }

}
