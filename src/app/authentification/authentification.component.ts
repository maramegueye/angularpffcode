import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserDetail } from '../models';

@Component({
  selector: 'authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {

  login = "admin@gmail.com";
  password = "admin1234";
  loginError = false; // Variable to track login errors

  constructor(private loginService: LoginService, private router: Router) { }

  connexion() {
    alert("login =" + this.login + "password=" + this.password);
    this.loginService.login(this.login, this.password).subscribe({
      next: (user: UserDetail) => {
        console.log("authentification de ");
        console.log(user);

        // Check if the login and password match the expected values
        if (this.login === "admin@gmail.com" && this.password === "admin1234") {
          console.log("authentification réussie");

          // Navigate to the admin page only if login and password are correct
          this.router.navigateByUrl('/admin');
        } else {
          this.loginError = true; // Set loginError to true
          console.log("authentification échouée, login ou mot de passe incorrect");
          // Handle incorrect login or password here (e.g., show an error message)
        }
      },
      error: (err: any) => {
        console.log("erreur connexion");
        console.log(err);
      }
    });
  }

  logout() {
    this.loginService.logout(); // Call the logout method from the service
    this.router.navigateByUrl('/acceuil'); // Redirect to the login page
  }
}
