import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzU0OTBiNzg4MDg4ZDM2NTg0ZjlmMDM3YTYzZjU1OCIsInN1YiI6IjYyOTI2NmMzMGU2NGFmMDA2NDE4OGEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWi64dJV4oyYEIpgulh6YeH76Jjo_jX6GJrCdbV95dM';

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${this._token}`}
    })
    return next.handle(request);
  }
}
