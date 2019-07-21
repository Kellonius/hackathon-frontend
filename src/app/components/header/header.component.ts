import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  link: boolean;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.link = window.location.href.includes('epic');
  }

  signOut() {
    this.auth.loggedInUser = undefined;
    this.router.navigate(['/login']).then();
  }

  ngOnChanges(): void {
    this.link = window.location.href.includes('epic');
  }

}
