import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { LoginService } from '../login.service';
import { UserDetail } from '../models';

@Component({
  selector: 'authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {

  login = "toto";
  password = "titi";

  constructor(private loginService: LoginService, private router: Router) { // Inject Router

  }

  connexion() {
    alert("login =" + this.login + "password=" + this.password);
    this.loginService.login(this.login, this.password).subscribe({
      next: (user: UserDetail) => {
        console.log("authentification de ");
        console.log(user);
      },
      error: (err: any) => {
        console.log("erreur connexion");
        console.log(err);
      },
      complete: () => {
        console.log("authentification reussi");
        
        // Navigate to another page after successful login
        this.router.navigateByUrl('/admin');
      }
    });
  }
}
