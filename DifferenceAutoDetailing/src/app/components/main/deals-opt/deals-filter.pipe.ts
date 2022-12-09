import { Pipe, PipeTransform } from '@angular/core';
import { Deal } from 'src/app/models/deals.model';


@Pipe({
  name: 'dealsFilter',
  pure: false
})
export class DealsFilterPipe implements PipeTransform {

  transform(deals: Deal[], term: string): any {
    const filteredDeals: Deal[] = [];
    
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
