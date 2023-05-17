import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './progress.component.html',
})
export class ProgressComponent {}
