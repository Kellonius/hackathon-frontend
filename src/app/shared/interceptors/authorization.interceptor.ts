import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorized = request.clone({
      setHeaders: {
        // 'Authorization': this.localStorageService.getToken(),
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      }
    });

    return next.handle(authorized);
    // .do(event => {
    //   if (event instanceof HttpResponse) {
    //     const newAuthToken = event.headers.get('Authorization');
    //     // this.localStorageService.setToken(newAuthToken);
    //   }
    // });
  }
}
