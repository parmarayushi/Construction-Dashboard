import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-cost',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cost.component.html',
})
export class CostComponent {}
