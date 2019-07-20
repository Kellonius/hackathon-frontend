import { Component } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hackathon-frontend';

  constructor(private router: Router) { }

  navigate(route: string[]) {
    this.router.navigate(route);
  }
}
