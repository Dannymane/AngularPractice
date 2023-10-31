import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  serverUrl = 'http://localhost:3000/locations';
  constructor() { }

  async GetAllHousingLocations(): Promise<HousingLocation[]>{
    const data = await fetch(this.serverUrl);
    return await data.json() ?? [];
  }

  async GetHousingLocationById(id: number): Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.serverUrl}/${id}`);
    return await data.json() ?? {};
  }

  SubmitApplication(firstName: string, lastName: string, email: string){
    console.log(`New submission: ${firstName} ${lastName}, email: ${email}`);
  }
}
