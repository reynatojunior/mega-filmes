import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { imdbFilmModel } from './imdb-film.model';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private apikey: string = '989b3a4ea9beb9807d35ddc691c2a6d7';
  baseUrl: string = 'http://localhost:3000/results';
  baseUrlPoster: string = `https://image.tmdb.org/t/p/w500/`;

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<imdbFilmModel[]>{
    return this.httpClient.get<imdbFilmModel[]>(this.baseUrl);
  }

  getPosters(poster_path: string): Observable<any>{
    return this.httpClient.get<any>(this.baseUrlPoster + poster_path)

  }
}
