import {Component, OnInit} from '@angular/core';
import {UserLoginRequest} from '../../requests/UserLoginRequest';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  template: `
    <div class="img-wrap" *ngIf="loadingService.isLoading()">
      <img class="img-active" src="../../../assets/icon_pill.png" alt="">
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loginDetails: UserLoginRequest = new UserLoginRequest();
  spinning = false;

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit() {
  }
}
