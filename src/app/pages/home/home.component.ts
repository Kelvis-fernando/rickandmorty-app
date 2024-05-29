import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterList } from 'src/app/interfaces/characters';
import { HomeService } from 'src/app/services/home.service';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  characters?: CharacterList;
  private searchSubject = new Subject<string>();
  private searchSubscription!: Subscription;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((searchTerm) => {
        this.homeService.searchCharacterList(searchTerm).subscribe((data) => {
          this.characters = data;
        });
      });

    this.homeService.getAll().subscribe((data) => {
      this.characters = data;
    });
  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  searchCharacter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;
    this.searchSubject.next(searchTerm);
  }
}
