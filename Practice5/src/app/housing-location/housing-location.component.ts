import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="hl.photo" alt="Exterior photo of {{hl.name}}">
      <h2 class="listing-heading">{{hl.name}}</h2>
      <p class="listing-location">{{hl.city}}, {{hl.state}}</p>
      <a [routerLink]="['details', hl.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
@Input() hl!: HousingLocation;
}
