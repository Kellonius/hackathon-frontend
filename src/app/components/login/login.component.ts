import { Component, OnInit } from '@angular/core';
import {UserLoginRequest} from '../../requests/UserLoginRequest';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: UserLoginRequest = new UserLoginRequest();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.loginDetails.email = username;
    this.loginDetails.password = password;
    this.auth.login(this.loginDetails).subscribe(data => {
      if (data) {
        this.auth.loggedInUser = data;
        this.router.navigate(['/']).then();
      }

    });
  }

}
