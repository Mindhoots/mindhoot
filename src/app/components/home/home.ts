import { Component } from '@angular/core';
import { FooterComponent } from '../footer-component/footer-component';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar-component/nav-bar-component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavBarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) { }

  onProjectClicked(projectTitle: string) {
    if (projectTitle === 'task-manager') {
      this.router.navigate(['/task-manager'], {
        fragment: 'overview'
      });
    }

  }

}
