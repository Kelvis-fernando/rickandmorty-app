import { Component, OnInit } from '@angular/core';
import { CharacterList } from 'src/app/interfaces/characters';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  character?: CharacterList;

  ngOnInit(): void {
    this.homeService.getAll().subscribe((data) => {
      this.character = data;
    });
  }
}
