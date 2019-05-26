import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class DataInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Default
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers
          .set('Content-Type', 'application/json')
          .append('Access-Control-Allow-Credentials', 'true')
      });
    }

    return next.handle(req);
  }
}
