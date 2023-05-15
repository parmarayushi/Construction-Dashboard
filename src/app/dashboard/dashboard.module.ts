import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardPresentationComponent } from './dashboard-container/dashboard-presentation/dashboard-presentation.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [DashboardContainerComponent, DashboardPresentationComponent],
  imports: [CommonModule, DashboardRoutingModule, HttpClientModule],
  providers: [DashboardService],
})
export class DashboardModule {}
