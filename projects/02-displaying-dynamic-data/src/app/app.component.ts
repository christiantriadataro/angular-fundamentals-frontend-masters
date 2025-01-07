import { Component } from '@angular/core';
import {UserInfoComponent} from "../../../11-dependency-injection/src/app/user-info/user-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section>
      <p>Welcome back</p>
      <app-user-info/>
    </section>
  `,
  styles: ``,
  imports: [
    UserInfoComponent
  ]
})
export class AppComponent {
  item = {
    name: 'Treasure Trove Trunk',
    price: 30,
    description:
      'Unveil a treasure trove of surprises in this delightful mystery box.',
  };
}
