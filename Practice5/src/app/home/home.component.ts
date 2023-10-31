import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Find house" #filter>
        <button class="primary" type="button" (click)="FilterLocations(filter.value)">Search</button>
      </form>
    </section>
    <section>
      <app-housing-location *ngFor="let hl1 of filteredLocations" [hl]="hl1">
      </app-housing-location> 
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allLocations: HousingLocation[] = [];
  filteredLocations: HousingLocation[] = [];

  constructor(private hs: HousingService){
    hs.GetAllHousingLocations().then(
      hls => {
        this.allLocations = hls;
        this.filteredLocations = hls;
      }
    )
  }

  FilterLocations(text: string){
    if(!text){
      this.filteredLocations = this.allLocations;
    }

    this.filteredLocations = this.allLocations.filter(hl => {
        const nameMatch = hl.name.toLowerCase().includes(text.toLowerCase());
        const cityMatch = hl.city.toLowerCase().includes(text.toLowerCase());
        const stateMatch = hl.state.toLowerCase().includes(text.toLowerCase());
      
        return nameMatch || cityMatch || stateMatch;
      }
    )
  }

}
