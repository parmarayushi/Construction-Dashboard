import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './time.component.html',
})
export class TimeComponent {}
