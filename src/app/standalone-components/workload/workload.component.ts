import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-workload',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './workload.component.html',
})
export class WorkloadComponent {}
