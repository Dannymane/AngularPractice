import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
// @Input() hero?: Hero;
// @Input() hero: Hero | undefined;
hero: Hero | undefined;
constructor(private heroService: HeroService,
  private router: ActivatedRoute,
  private location: Location) {}

ngOnInit():void {
  // const id = Number(this.router.snapshot.params['id']);
  const id = Number(this.router.snapshot.paramMap.get('id'));
  this.heroService.getHeroById(id).subscribe(h => this.hero = h);
}

GoBack(): void{
  this.location.back();
}
}
