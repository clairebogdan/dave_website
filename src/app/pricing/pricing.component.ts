import { Component } from '@angular/core';
import { ContactBlockComponent } from '../contact-block/contact-block.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ContactBlockComponent, MatGridListModule, CommonModule, MatTableModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  displayedColumns: string[] = ['tour', 'two', 'three', 'four', 'five', 'six'];
  data = [
    { tour: 'Sunset & Wine Cruise, 2 hours', two: '$300', three: '$350', four: '$400', five: '$425', six: '$450' },
    { tour: 'Sea Shell & Shark Tooth Hunt, 3 hours', two: '$400', three: '$425', four: '$450', five: '$500', six: '$550' },
    { tour: 'Island & Sand Bar Hopping, 3 hours', two: '$400', three: '$425', four: '$450', five: '$500', six: '$550' },
    { tour: 'Charleston Historic Harbor Tour, 2 hours', two: '$350', three: '$400', four: '$425', five: '$450', six: '$500' },
    { tour: 'Swim & Sunbathing Fun, 2 hours', two: '$350', three: '$400', four: '$425', five: '$450', six: '$500' },
    { tour: 'Lunch or Dinner at a Waterfront Restaurant, 3 hours', two: '$400', three: '$425', four: '$450', five: '$500', six: '$550' },
  ];

}
