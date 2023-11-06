import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService){} //its good practice to keep constructor body empty
  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero){
    console.log("hi");
    this.selectedHero = hero;
  }

}
