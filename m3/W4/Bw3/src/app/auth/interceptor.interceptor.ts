import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    let newReq
    
    if (token != null) {
      newReq = request.clone({
        headers: request.headers.append('Authorization', 'Bearer ' + token),
      });
    } else {
      newReq = request;
    }
    
    return next.handle(newReq)
  }
}
