import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task.component.html',
})
export class TaskComponent {}
