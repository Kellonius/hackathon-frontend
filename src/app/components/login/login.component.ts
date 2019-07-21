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
  spinning = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async login(username, password) {
    this.spinning = true;
    await this.delay(1500);
    this.loginDetails.email = username;
    this.loginDetails.password = password;
    this.auth.login(this.loginDetails).subscribe(data => {
      if (data) {
        this.auth.loggedInUser = data;
        localStorage.setItem("auth", JSON.stringify(data));
        this.router.navigate(['/']).then();
      } else {
        this.spinning = false;
      }

    });
  }
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
