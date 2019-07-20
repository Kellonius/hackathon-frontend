import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// import {LocalStorageService} from '../services/local-storage/local-storage.service';
import {Router} from '@angular/router';
import 'rxjs-compat/add/operator/do';
import { NavigationService } from 'src/app/services/navigation.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              // private localStorageService: LocalStorageService,
              private navigationService: NavigationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      // .do(() => {
      // }, error => {
      //   if (error instanceof HttpErrorResponse && error.status === 401) {
      //     if (error.headers && error.headers.has('Authorization')) {
      //       this.router.navigateByUrl('/access-denied');
      //     } else {
      //       this.localStorageService.clearToken();
      //       this.navigationService.navigateToBackend('logoff');
      //     }
      //   }
      // });
  }
}
