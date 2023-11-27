import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private loginService: LoginService) { }

  logout() {
    this.loginService.logout();
  }

}
