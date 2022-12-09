import { Component, Input, OnInit } from '@angular/core';
import { Deal } from 'src/app/models/deals.model';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals-display-single',
  templateUrl: './deals-display-single.component.html',
  styleUrls: ['./deals-display-single.component.scss']
})
export class DealsDisplaySingleComponent implements OnInit {
@Input() singleDeal: Deal;
  constructor(
    private dealService: DealsService
  ) { }

  ngOnInit(): void {
    console.log(this.singleDeal);
  }

  onDelete(){
    console.log(this.singleDeal);
    this.dealService.onDelete(this.singleDeal);
    
  }
}
