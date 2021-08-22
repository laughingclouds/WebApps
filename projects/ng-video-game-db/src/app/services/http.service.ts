import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';

import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGamesList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }

  getGameDetails(id: string): Observable<Game> {
    const gamesInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gamesTrailersRequest = this.http.get(
      `${env.BASE_URL}/games/${id}/movies`
    );
    const gameScreenshotsRequest = this.http.get(
      `${env.BASE_URL}/games/${id}/screenshots`
    );

    return forkJoin({
      gamesInfoRequest,
      gameScreenshotsRequest,
      gamesTrailersRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gamesTrailersRequest']?.results,
        };
      })
    );
  }
}
