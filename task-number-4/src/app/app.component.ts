import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-number-4';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 1) {
      this.oddNumbers.push(firedNumber);
    } else {
      this.evenNumbers.push(firedNumber);
    }
  }
}
