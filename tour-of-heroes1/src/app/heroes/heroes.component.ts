import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  //its good practice to keep constructor body empty
  constructor(private heroService: HeroService, private messageService: MessageService){} 

  ngOnInit(): void{
    this.getHeroes();
  }

  // this method will call the service method asynchronously (because heroService.getHeroes() return Observable and 
  // we subscribe it). Observable<Hero[]> return immediately,without value. It emits Hero[] or an error later.
  // We wait for emitting by .subscribe
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
