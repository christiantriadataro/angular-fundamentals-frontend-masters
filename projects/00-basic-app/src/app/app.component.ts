import { Component } from "@angular/core"

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <button type="button" [disabled]="isDisabled">Save</button>
    <button (click)="handleClick()">Save</button>
    <ng-container [userData]="user"></ng-container>
  `,
  styles: ``
})

export class AppComponent {
  isDisabled = true;
  handleClick = () => {
    this.isDisabled = false;
  }
  user = {
    name: "Chan",
    position: "Dev"
  }
}
