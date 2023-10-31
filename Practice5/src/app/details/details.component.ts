import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-details',
  template: `
  <article>
    <img [src]="hl?.photo" class="listing-photo" alt="Exterior photo of {{hl?.photo}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{hl?.name}}</h2>
      <p class="listing-location">{{hl?.city}}, {{hl?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{hl?.availableUnits}}</li>
        <li>Does this location have wifi: {{hl?.wifi ? "yes" : "no"}}</li>
        <li>Does this location have laundry: {{hl?.laundry ? "yes" : "no"}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" >
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName = "email">
        <button type="submit" (click)="SubmitApplication()"  class="primary">Apply now</button>
      </form>
    </section>
  </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  hl: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private hls: HousingService, route: ActivatedRoute){
    const id = parseInt(route.snapshot.params['id'], 10);

    hls.GetHousingLocationById(id).then(hl => 
      { this.hl = hl });
  }

  SubmitApplication(){
    this.hls.SubmitApplication(this.applyForm.value.firstName ?? '',
     this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '');
  }

}
