import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

}
