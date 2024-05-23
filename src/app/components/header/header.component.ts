import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly logo = '../../../assets/logo.png';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToFavorites() {
    this.router.navigate(['favorites']);
  }
}
