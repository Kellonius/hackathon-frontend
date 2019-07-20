import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.has('no-load')) {
      return next.handle(request);
    }

    this.loadingService.addLoad();

    return next.handle(request)
      .pipe(tap(
        null,
        () => this.loadingService.removeLoad(),
        () => this.loadingService.removeLoad()
      ));
  }
}
