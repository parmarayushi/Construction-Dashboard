import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './health.component.html',
})
export class HealthComponent {}
