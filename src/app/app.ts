import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private router: Router) { }

  protected readonly title = signal('MindHoot Labs');

  onProjectClicked(projectTitle: string) {
    console.log(projectTitle);

    this.router.navigate(['/task-manager']);

  }

}
