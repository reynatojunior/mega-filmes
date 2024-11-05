import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';

@Component({
  selector: 'app-casousel',
  templateUrl: './casousel.component.html',
  styleUrl: './casousel.component.css'
})
export class CasouselComponent implements OnInit{

  public movies: any = [];

  constructor(private imdbService: ImdbService){}

  ngOnInit(): void {
      this.getMovies();
  }

  getMovies():void{
    this.imdbService.getData().subscribe((data) => 
    data.forEach((item) => {
      this.movies.push(item);

      while (this.movies.length > 10){
        this.movies.pop();
      }
        return;

    })
    )
    console.log(this.movies);
  }

}
