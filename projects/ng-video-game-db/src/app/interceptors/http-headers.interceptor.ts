import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'x-rapidapi-key': 'bec76c3cddmsh87cd938c8809f1cp151c6ejsn1160eeccc26b',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '1f46a092ff8e4e7593251eca89992bb4',
      }
    })
    return next.handle(request);
  }
}
