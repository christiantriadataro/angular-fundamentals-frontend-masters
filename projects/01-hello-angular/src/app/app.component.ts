import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <section>
      <p> Welcome back, {{ userName }}</p>
    </section>
  `,
  styles: `
    ol {
      list-style-type: none;
    }
  `,
})
export class AppComponent {
  userName = 'codingChamp';
}
