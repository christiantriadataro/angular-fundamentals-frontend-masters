import { Component } from "@angular/core"

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <section>
      @if (loggedIn) {
        <p>Please login</p>
      } @else {
        <p>Welcome back</p>
      }

    </section>
  `,
  styles: ``
})

export class AppComponent {
  loggedIn = false;
}
