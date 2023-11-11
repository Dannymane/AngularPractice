import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' 
  // The providedIn: 'root' configuration means that Angular will create a single instance of HeroService
  //  at the root level of your application and make it available for injection to any component or service
  //   that requests it (without providing in "providers:"). SINGLETON
})
export class HeroService {

  constructor(private messageService: MessageService) { }
//of() wrap into Observable<>
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHeroById(id: number): Observable<Hero | undefined>{
    const hero = HEROES.find(h => h.id === id);
    this.messageService.add(`HeroService: fetched hero with id = ${id}`);
    return of(hero);
  }
}
