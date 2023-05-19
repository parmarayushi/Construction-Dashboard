import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardPresentationComponent } from './dashboard-container/dashboard-presentation/dashboard-presentation.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { CostComponent } from '../standalone-components/cost/cost.component';
import { HealthComponent } from '../standalone-components/health/health.component';
import { ProgressComponent } from '../standalone-components/progress/progress.component';
import { TaskComponent } from '../standalone-components/task/task.component';
import { TimeComponent } from '../standalone-components/time/time.component';
import { WorkloadComponent } from '../standalone-components/workload/workload.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [DashboardContainerComponent, DashboardPresentationComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HealthComponent,
    TaskComponent,
    ProgressComponent,
    TimeComponent,
    CostComponent,
    WorkloadComponent,
  ],
  providers: [DashboardService],
})
export class DashboardModule {}
