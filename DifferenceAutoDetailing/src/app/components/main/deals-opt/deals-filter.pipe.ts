import { Pipe, PipeTransform } from '@angular/core';
import { Deals } from 'src/app/models/deals.model';


@Pipe({
  name: 'dealsFilter',
  pure: false
})
export class DealsFilterPipe implements PipeTransform {

  transform(deals: Deals[], term: string): any {
    const filteredDeals: Deals[] = [];
    
    deals.forEach(deal => {
      if (deal.type == term){
        filteredDeals.push(deal);
      }
    })

    if (filteredDeals.length < 1) {
      return deals;
    }

    return filteredDeals;
  }

}
