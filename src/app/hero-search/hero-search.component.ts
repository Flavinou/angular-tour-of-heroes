import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {HeroService} from '../hero.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the input term
      debounceTime(300),

      // this function ignores new term if it's the same as the previous one
      distinctUntilChanged(),

      // switch to new observable research every time the input term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

  // Function pushing a search term into the Observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
